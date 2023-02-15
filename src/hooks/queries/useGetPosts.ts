import {useCallback, useEffect, useState} from 'react';

import {getPosts} from '~api';
import {usePostsContext} from '~contexts';
import {getPersistedPosts, persistPosts} from '~helpers';
import {useNetInfo} from '~hooks/platform/useNetInfo';
import {PostUI, QueryState} from '~interfaces';

interface UseGetPosts {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  refetch: () => void;
  data?: PostUI[];
}

export const useGetPosts = (): UseGetPosts => {
  const {posts, setPosts} = usePostsContext();
  const {isConnected} = useNetInfo();
  const [requestStatus, setRequestStatus] = useState<QueryState>(
    QueryState.Idle,
  );

  // Callback to fetch fetchs from services
  const fetchData = useCallback(
    async (controller?: AbortController) => {
      try {
        // Update request status to loading
        setRequestStatus(QueryState.Loading);

        // Fetching
        const data = await getPosts({
          controller,
        });

        // Save into context with UI properties
        setPosts(data.map(post => ({...post, favorite: false})));

        // Update request status to Success
        setRequestStatus(QueryState.Success);
      } catch (error: any) {
        // Update request status to Error
        setRequestStatus(QueryState.Error);
      }
    },
    [setPosts],
  );

  // Callback to get "posts" from storage
  const getPersistedData = useCallback(async () => {
    try {
      // Update request status to loading
      setRequestStatus(QueryState.Loading);

      const cachedData = await getPersistedPosts();

      !!cachedData && setPosts(cachedData);

      // Update request status to Success
      setRequestStatus(QueryState.Success);
    } catch (error) {
      // Update request status to Error
      setRequestStatus(QueryState.Error);
    }
  }, [setPosts]);

  // Use Effect to get "posts" from server or from storage
  useEffect(() => {
    const controller = new AbortController();

    if (isConnected === null) {
      return;
    }

    isConnected ? fetchData() : getPersistedData();

    return () => {
      controller.abort();
    };
  }, [isConnected, fetchData, getPersistedData]);

  // Use Effect to persist posts when "posts" changes
  useEffect(() => {
    persistPosts(posts);
  }, [posts]);

  return {
    data: posts,
    isError: requestStatus === QueryState.Error,
    isLoading: requestStatus === QueryState.Loading,
    isSuccess: requestStatus === QueryState.Success,
    refetch: fetchData,
  };
};

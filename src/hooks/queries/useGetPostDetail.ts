import {useCallback, useEffect, useMemo, useState} from 'react';

import {getCommentsByPost, getPostDetail, getUserDetail} from '~api';
import {getPersistedPostDetail, persistPostDetail} from '~helpers';
import {useNetInfo} from '~hooks/platform/useNetInfo';
import {Comment, Post, PostWithMetadata, QueryState, User} from '~interfaces';

interface UseGetPostDetail {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  data?: PostWithMetadata;
}

export const useGetPostDetail = (postId: number): UseGetPostDetail => {
  const {isConnected} = useNetInfo();
  const [post, setPost] = useState<Post | undefined>();
  const [author, setAuthor] = useState<User | undefined>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [requestStatus, setRequestStatus] = useState<QueryState>(
    QueryState.Idle,
  );
  const postWithMetadata = useMemo((): PostWithMetadata | undefined => {
    return post
      ? {
          data: post,
          metadata: {author, comments},
        }
      : undefined;
  }, [post, author, comments]);

  const fetchDetail = useCallback(async () => {
    try {
      // Update request status to loading
      setRequestStatus(QueryState.Loading);

      // Fetching
      const data = await getPostDetail(postId);

      // Update local state with the data
      setPost(data);

      // Update request status to Success
      setRequestStatus(QueryState.Success);
    } catch (error) {
      // Update request status to Error
      setRequestStatus(QueryState.Error);
    }
  }, [postId]);

  const fetchComments = useCallback(async () => {
    try {
      const data = await getCommentsByPost(postId);
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  const fetchAuthor = useCallback(async (userId: number) => {
    try {
      const data = await getUserDetail(userId);
      setAuthor(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Callback to get post detail (and metadata if exists) from storage
  const getPersistedData = useCallback(async () => {
    try {
      // Update request status to loading
      setRequestStatus(QueryState.Loading);

      const cachedData = await getPersistedPostDetail(postId);
      if (cachedData) {
        setPost(cachedData.data);
        setAuthor(cachedData.metadata.author);
        setComments(cachedData.metadata.comments || []);
        // Update request status to Success
        setRequestStatus(QueryState.Success);
      } else {
        setRequestStatus(QueryState.Error);
      }
    } catch (error) {
      // Update request status to Error
      setRequestStatus(QueryState.Error);
    }
  }, [postId]);

  // Use Effect to get post detail, and comments by post id
  useEffect(() => {
    if (isConnected === null) {
      return;
    }

    if (isConnected) {
      fetchDetail();
      fetchComments();
    } else {
      getPersistedData();
    }
  }, [fetchComments, fetchDetail, getPersistedData, isConnected]);

  // Use Effect to get author info, when post data is defined
  useEffect(() => {
    if (isConnected && !!post) {
      fetchAuthor(post.userId);
    }
  }, [fetchAuthor, isConnected, post]);

  // Use Effect to persist post detail and metadata
  useEffect(() => {
    postWithMetadata && persistPostDetail(postWithMetadata);
  }, [postWithMetadata]);

  return {
    data: postWithMetadata,
    isLoading: requestStatus === QueryState.Loading,
    isError: requestStatus === QueryState.Error,
    isSuccess: requestStatus === QueryState.Success,
  };
};

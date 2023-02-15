import {useContext} from 'react';

import {PostsContext} from './PostsProvider';

/**
 * Custom hook to get only the "posts" context state
 */
export const useGetPostsContext = () => {
  const {posts} = useContext(PostsContext);

  return posts;
};

/**
 * Custom hook to get "posts" and actions from Posts context
 */
export const usePostsContext = () => {
  const contextValues = useContext(PostsContext);

  return contextValues;
};

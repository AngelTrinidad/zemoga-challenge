import React, {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useReducer,
} from 'react';

import {postsReducer} from './PostsReducer';
import {PostsActionType, PostsContextValue} from './types';

import {PostUI} from '~interfaces';

export const PostsContext = createContext({} as PostsContextValue);

export const PostsProvider: FC<PropsWithChildren> = ({children}) => {
  const [state, dispatch] = useReducer(postsReducer, {
    posts: [],
  });

  const setPosts = useCallback(
    (payload: PostUI[]) => {
      dispatch({type: PostsActionType.SET_POSTS, payload});
    },
    [dispatch],
  );

  const toggleFavorite = useCallback(
    (payload: number) => {
      dispatch({type: PostsActionType.TOGGLE_FAVORITE, payload});
    },
    [dispatch],
  );

  const removePost = useCallback(
    (payload: number) => {
      dispatch({type: PostsActionType.REMOVE_POST, payload});
    },
    [dispatch],
  );

  const removeNotFavoritePosts = useCallback(() => {
    dispatch({type: PostsActionType.REMOVE_NOT_FAVORITE_POSTS});
  }, [dispatch]);

  const valuesProvider = useMemo(
    () => ({
      posts: state.posts,
      setPosts,
      toggleFavorite,
      removePost,
      removeNotFavoritePosts,
    }),
    [state, setPosts, toggleFavorite, removePost, removeNotFavoritePosts],
  );

  return (
    <PostsContext.Provider value={valuesProvider}>
      {children}
    </PostsContext.Provider>
  );
};

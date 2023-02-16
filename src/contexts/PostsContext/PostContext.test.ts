import {postsReducer} from './PostsReducer';
import {PostsAction, PostsActionType, PostsState} from './types';

import {postList, postWithFavorite, postWithNoFavorite} from '~mocks';

describe('post reducer', () => {
  it('should handle SET_POSTS', () => {
    const initialState: PostsState = {
      posts: [],
    };

    const action: PostsAction = {
      type: PostsActionType.SET_POSTS,
      payload: postList,
    };

    expect(postsReducer(initialState, action)).toEqual({
      posts: postList,
    });
  });

  it('should handle REMOVE_POST', () => {
    const initialState: PostsState = {
      posts: postList,
    };

    const action: PostsAction = {
      type: PostsActionType.REMOVE_POST,
      payload: postWithFavorite.id,
    };

    expect(postsReducer(initialState, action).posts.length).toBe(1);
  });

  it('should handle REMOVE_NOT_FAVORITE_POSTS', () => {
    const initialState: PostsState = {
      posts: postList,
    };

    const action: PostsAction = {
      type: PostsActionType.REMOVE_NOT_FAVORITE_POSTS,
    };

    expect(postsReducer(initialState, action).posts.length).toBe(1);
  });

  it('should handle TOGGLE_FAVORITE', () => {
    const initialState: PostsState = {
      posts: [postWithNoFavorite],
    };

    const action: PostsAction = {
      type: PostsActionType.TOGGLE_FAVORITE,
      payload: postWithNoFavorite.id,
    };

    expect(postsReducer(initialState, action).posts[0].favorite).toBe(true);
  });
});

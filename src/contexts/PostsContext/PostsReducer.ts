import {PostsAction, PostsActionType, PostsState} from './types';

import {PostUI} from '~interfaces';

export const postsReducer = (
  state: PostsState,
  action: PostsAction,
): PostsState => {
  switch (action.type) {
    case PostsActionType.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case PostsActionType.TOGGLE_FAVORITE:
      return {
        ...state,
        posts: state.posts.reduce((prev, current) => {
          if (current.id === action.payload) {
            current = {...current, favorite: !current.favorite};
            if (current.favorite) {
              prev.unshift(current);
            } else {
              prev.push(current);
            }
          } else {
            prev.push(current);
          }

          return prev;
        }, [] as PostUI[]),
      };
    case PostsActionType.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    case PostsActionType.REMOVE_NOT_FAVORITE_POSTS:
      return {
        ...state,
        posts: state.posts.filter(post => post.favorite),
      };
    default:
      return state;
  }
};

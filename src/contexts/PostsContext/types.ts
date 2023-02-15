import {PostUI} from '~interfaces';

export interface PostsState {
  posts: PostUI[];
}

export enum PostsActionType {
  SET_POSTS = 'SET_POSTS',
  TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
  REMOVE_POST = 'REMOVE_POST',
  REMOVE_NOT_FAVORITE_POSTS = 'REMOVE_NOT_FAVORITE_POSTS',
}

export type PostsAction =
  | {
      type: PostsActionType.SET_POSTS;
      payload: PostUI[];
    }
  | {
      type: PostsActionType.TOGGLE_FAVORITE;
      payload: number;
    }
  | {
      type: PostsActionType.REMOVE_POST;
      payload: number;
    }
  | {
      type: PostsActionType.REMOVE_NOT_FAVORITE_POSTS;
    };

export interface PostsContextValue extends PostsState {
  setPosts: (value: PostUI[]) => void;
  toggleFavorite: (value: number) => void;
  removePost: (value: number) => void;
  removeNotFavoritePosts: () => void;
}

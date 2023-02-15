import AsyncStorage from '@react-native-async-storage/async-storage';

import {StorageKey} from './types';

import {PostUI, PostWithMetadata} from '~interfaces';

export const persistPosts = async (posts: PostUI[]): Promise<boolean> => {
  try {
    const value = JSON.stringify(posts);

    await AsyncStorage.setItem(StorageKey.Posts, value);

    return true;
  } catch (error) {
    return false;
  }
};

export const getPersistedPosts = async (): Promise<PostUI[] | undefined> => {
  try {
    const value = await AsyncStorage.getItem(StorageKey.Posts);

    if (value === null) {
      return undefined;
    }

    return JSON.parse(value) as PostUI[];
  } catch (error) {
    return undefined;
  }
};

export const persistPostDetail = async (
  post: PostWithMetadata,
): Promise<boolean> => {
  try {
    const value = JSON.stringify(post);

    await AsyncStorage.setItem(
      `${StorageKey.PostDetail}/${post.data.id}`,
      value,
    );

    return true;
  } catch (error) {
    return false;
  }
};

export const getPersistedPostDetail = async (
  postId: number,
): Promise<PostWithMetadata | undefined> => {
  try {
    const value = await AsyncStorage.getItem(
      `${StorageKey.PostDetail}/${postId}`,
    );

    if (value === null) {
      return undefined;
    }

    return JSON.parse(value) as PostWithMetadata;
  } catch (error) {
    return undefined;
  }
};

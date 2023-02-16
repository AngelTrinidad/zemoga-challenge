import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {renderHook, waitFor} from '@testing-library/react-native';

import {useGetPostDetail} from '.';

import {mockOnGet, ModuleUrl, setupMockInterceptor} from '~api';
import {PostsProvider} from '~contexts';
import * as customHook from '~hooks/platform/useNetInfo';
import {comments, post, user} from '~mocks';

describe('Hook useGetPosts', () => {
  let interceptor: any;

  // Mock requests
  beforeAll(() => {
    interceptor = setupMockInterceptor();
    mockOnGet(interceptor, `${ModuleUrl.Posts}/${post.id}`).reply(200, post);
    mockOnGet(interceptor, `${ModuleUrl.Users}/${user.id}`).reply(200, user);
    mockOnGet(
      interceptor,
      `${ModuleUrl.Posts}/${post.id}/${ModuleUrl.Comments}`,
    ).reply(200, comments);

    jest.spyOn(customHook, 'useNetInfo').mockImplementation(() => ({
      isConnected: true,
    }));
  });

  it('should return post detail, comments, and author', async () => {
    const {result} = renderHook(() => useGetPostDetail(post.id), {
      wrapper: ({children}) => <PostsProvider>{children}</PostsProvider>,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    await waitFor(() => expect(result.current.isSuccessAuthor).toBe(true));

    expect(result.current.data).toEqual({
      data: post,
      metadata: {
        author: user,
        comments: comments,
      },
    });

    expect(AsyncStorage.setItem).toHaveBeenCalled();
  });

  it('should get data from local storage', async () => {
    jest.spyOn(customHook, 'useNetInfo').mockImplementation(() => ({
      isConnected: false,
    }));
    const {result} = renderHook(() => useGetPostDetail(post.id), {
      wrapper: ({children}) => <PostsProvider>{children}</PostsProvider>,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true), {
      timeout: 2000,
    });

    expect(AsyncStorage.getItem).toHaveBeenCalled();
  });
});

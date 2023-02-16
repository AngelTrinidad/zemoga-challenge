import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {renderHook, waitFor} from '@testing-library/react-native';

import {useGetPosts} from '.';

import {mockOnGet, ModuleUrl, setupMockInterceptor} from '~api';
import {PostsProvider} from '~contexts';
import * as customHook from '~hooks/platform/useNetInfo';
import {postList} from '~mocks';

describe('Hook useGetPosts', () => {
  let interceptor: any;

  // Mock requests
  beforeAll(() => {
    interceptor = setupMockInterceptor();

    mockOnGet(interceptor, ModuleUrl.Posts).reply(200, postList);
  });

  it('should return post list', async () => {
    jest.spyOn(customHook, 'useNetInfo').mockImplementation(() => ({
      isConnected: true,
    }));
    const {result} = renderHook(() => useGetPosts(), {
      wrapper: ({children}) => <PostsProvider>{children}</PostsProvider>,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true), {
      timeout: 2000,
    });

    expect(result.current.data).toHaveLength(postList.length);

    expect(AsyncStorage.setItem).toHaveBeenCalled();
  });

  it('should get data from local storage', async () => {
    jest.spyOn(customHook, 'useNetInfo').mockImplementation(() => ({
      isConnected: false,
    }));
    const {result} = renderHook(() => useGetPosts(), {
      wrapper: ({children}) => <PostsProvider>{children}</PostsProvider>,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true), {
      timeout: 2000,
    });

    expect(AsyncStorage.getItem).toHaveBeenCalled();
  });
});

import React from 'react';

import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';

import PostListScreen from '.';

import {mockOnGet, ModuleUrl, setupMockInterceptor} from '~api';
import {PostsProvider, ThemeProvider} from '~contexts';
import * as useNetInfo from '~hooks/platform/useNetInfo';
import {postList, screenNavigationProps} from '~mocks';

describe('<PostListScreen />', () => {
  let interceptor: any;

  // Mock requests
  beforeAll(() => {
    interceptor = setupMockInterceptor();

    mockOnGet(interceptor, ModuleUrl.Posts).reply(200, postList);

    jest.spyOn(useNetInfo, 'useNetInfo').mockImplementation(() => ({
      isConnected: true,
    }));
  });

  it('should show post list', async () => {
    render(
      <PostsProvider>
        <ThemeProvider>
          <PostListScreen {...screenNavigationProps} />
        </ThemeProvider>
      </PostsProvider>,
    );

    await waitFor(() => {
      postList.forEach(post => {
        expect(screen.getByText(post.title)).toBeDefined();
      });
    });
  });

  it('should remove last post', async () => {
    render(
      <PostsProvider>
        <ThemeProvider>
          <PostListScreen {...screenNavigationProps} />
        </ThemeProvider>
      </PostsProvider>,
    );

    await waitFor(() =>
      expect(screen.getByText(postList[0].title)).toBeDefined(),
    );

    act(() => {
      fireEvent.press(screen.getAllByText('Remove')[1]);
    });

    await waitFor(() =>
      expect(screen.queryByText(postList[1].title)).toBeNull(),
    );
  });

  it('should remove not favorites', async () => {
    render(
      <PostsProvider>
        <ThemeProvider>
          <PostListScreen {...screenNavigationProps} />
        </ThemeProvider>
      </PostsProvider>,
    );

    await waitFor(() =>
      expect(screen.getByText(postList[0].title)).toBeDefined(),
    );

    act(() => {
      fireEvent.press(screen.getByText('Remove unfavorites'));
    });

    await waitFor(() =>
      expect(screen.queryByText(postList[1].title)).toBeNull(),
    );
  });

  it('should refetch posts', async () => {
    render(
      <PostsProvider>
        <ThemeProvider>
          <PostListScreen {...screenNavigationProps} />
        </ThemeProvider>
      </PostsProvider>,
    );

    await waitFor(() =>
      expect(screen.getByText(postList[0].title)).toBeDefined(),
    );

    act(() => {
      screen.getAllByText('Remove').forEach(element => {
        fireEvent.press(element);
      });
    });

    await waitFor(() =>
      expect(screen.getByText('The list of posts is empty...')).toBeDefined(),
    );

    act(() => {
      fireEvent.press(screen.getByText('Get Posts'));
    });

    await waitFor(() =>
      expect(screen.getByText(postList[0].title)).toBeDefined(),
    );
  });
});

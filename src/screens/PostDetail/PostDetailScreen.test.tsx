import React from 'react';

import {render, screen, waitFor} from '@testing-library/react-native';

import PostDetailScreen from '.';

import {mockOnGet, ModuleUrl, setupMockInterceptor} from '~api';
import {PostsProvider, ThemeProvider} from '~contexts';
import * as useNetInfo from '~hooks/platform/useNetInfo';
import {comments, post, screenNavigationProps, user} from '~mocks';

describe('<PostDetailScreen />', () => {
  let interceptor: any;
  const screenProps = {
    ...screenNavigationProps,
    route: {
      params: {
        id: post.id,
      },
    },
  };

  beforeAll(() => {
    interceptor = setupMockInterceptor();

    mockOnGet(interceptor, `${ModuleUrl.Posts}/${post.id}`).reply(200, post);
    mockOnGet(interceptor, `${ModuleUrl.Posts}/${post.id}/comments`).reply(
      200,
      comments,
    );
    mockOnGet(interceptor, `${ModuleUrl.Users}/${user.id}`).reply(200, user);

    jest.spyOn(useNetInfo, 'useNetInfo').mockImplementation(() => ({
      isConnected: true,
    }));
  });

  it('should show post detail', async () => {
    render(
      <PostsProvider>
        <ThemeProvider>
          <PostDetailScreen {...screenProps} />
        </ThemeProvider>
      </PostsProvider>,
    );

    await waitFor(() => expect(screen.getByText(post.body)).toBeDefined());
  });

  it('should show post comments', async () => {
    render(
      <PostsProvider>
        <ThemeProvider>
          <PostDetailScreen {...screenProps} />
        </ThemeProvider>
      </PostsProvider>,
    );

    await waitFor(() => expect(screen.getByText(post.body)).toBeDefined());

    await waitFor(() =>
      expect(screen.getByText(comments[0].body)).toBeDefined(),
    );
  });

  it('should show post author', async () => {
    render(
      <PostsProvider>
        <ThemeProvider>
          <PostDetailScreen {...screenProps} />
        </ThemeProvider>
      </PostsProvider>,
    );

    await waitFor(() => expect(screen.getByText(post.body)).toBeDefined());

    await waitFor(() => expect(screen.getByText(user.name)).toBeDefined());
  });
});

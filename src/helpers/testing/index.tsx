import React from 'react';

import {render as RNTLRender} from '@testing-library/react-native';

import {PostsProvider, ThemeProvider} from '~contexts';

export * from '@testing-library/react-native';

export const render = (element: any) => {
  const component = RNTLRender(
    <ThemeProvider>
      <PostsProvider>{element}</PostsProvider>
    </ThemeProvider>,
  );

  return {
    ...component,
    rerender: (rerenderEl: any) =>
      component.rerender(
        <ThemeProvider>
          <PostsProvider>{rerenderEl}</PostsProvider>
        </ThemeProvider>,
      ),
  };
};

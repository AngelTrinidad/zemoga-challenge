import React, {FC} from 'react';

import {PostsProvider, ThemeProvider} from '~contexts';
import Navigation from '~navigation/Navigation';

const App: FC = () => {
  return (
    <ThemeProvider>
      <PostsProvider>
        <Navigation />
      </PostsProvider>
    </ThemeProvider>
  );
};

export default App;

import React, {FC, useCallback} from 'react';
import {View} from 'react-native';

import PostListView from './components/PostListView';
import styles from './styles';

import {
  AsyncContent,
  Button,
  SafeAreaContainer,
  Typography,
  ViewFlex,
} from '~components';
import {usePostsContext} from '~contexts';
import {useGetPosts, useNetInfo} from '~hooks';
import {MainScreen, Route} from '~navigation/types';
import {} from '~hooks';

const PostListScreen: FC<MainScreen<Route.PostList>> = ({navigation}) => {
  const {isConnected} = useNetInfo();
  const {toggleFavorite, removePost, removeNotFavoritePosts} =
    usePostsContext();
  const {data, isSuccess, isLoading, isError, refetch} = useGetPosts();

  const handlePostPress = useCallback(
    (id: number) => {
      navigation.navigate(Route.PostDetail, {
        id,
      });
    },
    [navigation],
  );

  return (
    <SafeAreaContainer>
      <Typography variant="xxl">Latest Posts</Typography>
      <AsyncContent
        isLoading={isLoading}
        isError={isError}
        onRetry={refetch}
        showRetry>
        {isSuccess && (
          <>
            <PostListView
              posts={data!}
              onPostPress={handlePostPress}
              toggleFavorite={toggleFavorite}
              removePost={removePost}
            />
            <View style={styles.footer}>
              {data!.length > 0 && (
                <ViewFlex>
                  <Button
                    title="Remove unfavorites"
                    onPress={removeNotFavoritePosts}
                  />
                </ViewFlex>
              )}
              {isConnected && (
                <ViewFlex>
                  <Button title="Get Posts" onPress={refetch} />
                </ViewFlex>
              )}
            </View>
          </>
        )}
      </AsyncContent>
    </SafeAreaContainer>
  );
};

export default PostListScreen;

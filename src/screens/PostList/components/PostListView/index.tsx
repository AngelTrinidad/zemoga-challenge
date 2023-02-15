import React, {FC, useCallback} from 'react';
import {FlatList} from 'react-native';

import styles from './styles';
import PostRow from '../PostRow';

import {Typography} from '~components';
import {PostUI} from '~interfaces';

interface Props {
  posts: PostUI[];
  onPostPress: (id: number) => void;
  toggleFavorite: (id: number) => void;
  removePost: (id: number) => void;
}

const PostListView: FC<Props> = ({
  posts,
  onPostPress,
  toggleFavorite,
  removePost,
}) => {
  const renderItem = useCallback(
    ({item}: {item: PostUI}) => (
      <PostRow
        data={item}
        onPress={onPostPress}
        toggleFavorite={toggleFavorite}
        onDeletePress={removePost}
      />
    ),
    [onPostPress, removePost, toggleFavorite],
  );

  const keyExtractor = useCallback((item: PostUI) => item.id.toString(), []);

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      ListEmptyComponent={
        <Typography textAlign="center">
          The list of posts is empty...
        </Typography>
      }
    />
  );
};

export default PostListView;

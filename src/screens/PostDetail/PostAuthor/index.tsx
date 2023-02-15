import React, {FC} from 'react';
import {View} from 'react-native';

import styles from './styles';

import {Typography} from '~components';
import {User} from '~interfaces';

interface Props {
  author: User;
}

const PostAuthor: FC<Props> = ({author}) => {
  return (
    <View style={styles.container}>
      <Typography variant="lg" style={styles.name}>
        By {author.username}
      </Typography>
      <Typography variant="lg">{author.name}</Typography>
      <Typography variant="lg">{author.email}</Typography>
    </View>
  );
};

export default PostAuthor;

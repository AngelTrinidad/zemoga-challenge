import React, {FC} from 'react';
import {View} from 'react-native';

import styles from './styles';

import {Typography} from '~components';
import {Comment} from '~interfaces';

interface Props {
  comments: Comment[];
}

const PostComments: FC<Props> = ({comments}) => {
  return (
    <View style={styles.container}>
      <Typography variant="xl" style={styles.title}>
        Comments
      </Typography>
      {comments.map(comment => (
        <View key={comment.id} style={styles.commentBox}>
          <Typography variant="lg" style={styles.commentBody}>
            {comment.body}
          </Typography>
          <View style={styles.line} />
          <Typography variant="sm" textAlign="right">
            By {comment.email}
          </Typography>
        </View>
      ))}
    </View>
  );
};

export default PostComments;

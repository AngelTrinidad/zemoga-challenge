import React, {FC, memo, useCallback} from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';

import styles from './styles';

import {FavButton, FlatButton, Typography} from '~components';
import {useTheme} from '~contexts';
import {capitalizeFirstLetter} from '~helpers/string';
import {PostUI} from '~interfaces';

interface Props {
  data: PostUI;
  onPress: (id: number) => void;
  toggleFavorite: (id: number) => void;
  onDeletePress: (id: number) => void;
}

const ProductRow: FC<Props> = ({
  onPress,
  toggleFavorite,
  onDeletePress,
  data: {id, title, body, favorite},
}) => {
  const {colors} = useTheme();

  const handlePress = useCallback(() => onPress(id), [onPress, id]);

  const handleToggleFavorite = useCallback(
    () => toggleFavorite(id),
    [toggleFavorite, id],
  );

  const handleDeletePress = useCallback(
    () => onDeletePress(id),
    [onDeletePress, id],
  );

  const headerStyle: ViewStyle = {
    backgroundColor: colors.secondary,
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={[styles.header, headerStyle]}>
        <Typography variant="xxl" style={styles.title}>
          {capitalizeFirstLetter(title)}
        </Typography>
        <View style={styles.favContent}>
          <FavButton isFavorite={favorite} onPress={handleToggleFavorite} />
        </View>
      </View>
      <View style={styles.body}>
        <Typography variant="lg" numberOfLines={3}>
          {body}
        </Typography>
      </View>
      <View style={styles.footer}>
        <FlatButton onPress={handleDeletePress}>Remove</FlatButton>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ProductRow);

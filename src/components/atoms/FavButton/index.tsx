import React, {FC} from 'react';
import {Image, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import styles from './styles';

import FavPNG from '~assets/img/fav.png';
import UnfavPNG from '~assets/img/unfav.png';

interface Props extends TouchableOpacityProps {
  isFavorite: boolean;
}

const FavButton: FC<Props> = ({isFavorite, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <Image source={isFavorite ? FavPNG : UnfavPNG} style={styles.image} />
    </TouchableOpacity>
  );
};

export default FavButton;

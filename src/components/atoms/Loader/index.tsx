import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';

import {useTheme} from '~contexts';

interface Props {
  isLoading?: boolean;
  size?: 'small' | 'large';
  color?: string;
}

const Loader: FC<Props> = ({color, isLoading = true, size = 'large'}) => {
  const {colors} = useTheme();

  return (
    <ActivityIndicator
      color={color || colors.primary}
      size={size}
      animating={isLoading}
    />
  );
};

export default Loader;

import React, {FC, PropsWithChildren} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

import styles from './styles';
import Loader from '../Loader';

import {useTheme} from '~contexts';

export interface ButtonProps extends PropsWithChildren {
  containerStyle?: ViewStyle;
  onPress?: () => void;
  isLoading?: boolean;
}

const BasicButton: FC<ButtonProps> = ({
  children,
  containerStyle,
  onPress,
  isLoading,
}) => {
  const {colors} = useTheme();

  const themeStyles: ViewStyle = {
    backgroundColor: colors.primary,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, themeStyles, containerStyle]}>
      {isLoading ? <Loader color="white" size="small" /> : children}
    </TouchableOpacity>
  );
};

export default BasicButton;

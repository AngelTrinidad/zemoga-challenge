import React, {FC, ReactNode} from 'react';
import {TextStyle, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import styles from './styles';

import Typography, {TypographyVariant} from '~/components/atoms/Typography';
import {useTheme} from '~contexts';

interface Props extends TouchableOpacityProps {
  children: ReactNode;
  textVariant?: TypographyVariant;
}

const FlatButton: FC<Props> = ({children, textVariant = 'xl', ...props}) => {
  const {colors} = useTheme();

  const textStyle: TextStyle = {
    color: colors.primary,
  };

  return (
    <TouchableOpacity {...props}>
      <Typography variant={textVariant} style={[styles.text, textStyle]}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

export default FlatButton;

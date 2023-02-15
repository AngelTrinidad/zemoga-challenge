import React, {FC} from 'react';
import {TextProps, TextStyle} from 'react-native';

import {TypographyVariant, Variant} from './types';

import Text from '~components/atoms/Text';
import {useTheme} from '~contexts';

export type {TypographyVariant};

interface Props extends TextProps {
  variant?: TypographyVariant;
  color?: 'primary' | 'secondary';
  textAlign?: 'center' | 'left' | 'right';
}

const VARIANT_STYLES: {[key: string]: TextStyle} = {
  [Variant.xxl]: {
    fontSize: 24,
  },
  [Variant.xl]: {
    fontSize: 20,
  },
  [Variant.lg]: {
    fontSize: 16,
  },
  [Variant.normal]: {
    fontSize: 14,
  },
  [Variant.sm]: {
    fontSize: 12,
  },
};

const Typography: FC<Props> = ({
  children,
  style,
  textAlign,
  variant = 'normal',
  color = 'primary',
  ...props
}) => {
  const {
    colors: {text},
  } = useTheme();

  const textStyle: TextStyle = {
    ...VARIANT_STYLES[variant],
    color: text[color],
    textAlign,
  };

  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  );
};

export default Typography;

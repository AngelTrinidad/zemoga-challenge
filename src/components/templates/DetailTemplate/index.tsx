import React, {FC, PropsWithChildren} from 'react';
import {ScrollView, ViewStyle} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './styles';

import {ViewFlex} from '~components/atoms';
import HeaderTitle from '~components/molecules/HeaderTitle';
import {useTheme} from '~contexts';
import {scaleSpace} from '~helpers';

interface Props extends PropsWithChildren {
  title?: string;
}

const DetailTemplate: FC<Props> = ({children, title = '', ...props}) => {
  const {top, bottom} = useSafeAreaInsets();
  const {colors} = useTheme();

  const headerStyles: ViewStyle = {
    paddingTop: top + scaleSpace(24),
  };

  const containerStyles: ViewStyle = {
    paddingBottom: bottom,
    backgroundColor: colors.screen.primary,
  };

  const contentStyles: ViewStyle = {
    backgroundColor: colors.screen.primary,
  };

  return (
    <ViewFlex style={containerStyles} {...props}>
      <HeaderTitle title={title} style={headerStyles} />
      <ScrollView
        contentContainerStyle={[contentStyles, styles.content]}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </ViewFlex>
  );
};

export default DetailTemplate;

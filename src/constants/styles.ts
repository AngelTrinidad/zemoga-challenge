import {ImageStyle, ViewStyle} from 'react-native';

import {SCREEN_WIDTH} from './device';

import {scaleSpace} from '~helpers';

export const DEFAULT_FONT = {
  regular: 'System',
  bold: 'System',
};

export const DEFAULT_SPACES = {
  paddingScreen: scaleSpace(20),
};

export const VIEW_CENTER_STYLES: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
};

export const FULL_WIDTH_SCREEN_IMAGE_STYLES: ImageStyle = {
  width: SCREEN_WIDTH - DEFAULT_SPACES.paddingScreen * 2,
};

export const SHADOW_STYLES: ViewStyle = {
  borderRadius: 12,
  shadowColor: 'black',
  shadowOpacity: 0.2,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  elevation: 10,
};

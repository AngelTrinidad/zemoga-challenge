import {StyleSheet} from 'react-native';

import {DEFAULT_SPACES} from '~constants/styles';
import {scaleSpace} from '~helpers';

const styles = StyleSheet.create({
  content: {
    padding: DEFAULT_SPACES.paddingScreen,
    paddingBottom: scaleSpace(24),
  },
});

export default styles;

import {StyleSheet} from 'react-native/';

import {scaleSpace} from '~helpers';

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    gap: scaleSpace(12),
    paddingVertical: scaleSpace(16),
  },
});

export default styles;

import {StyleSheet} from 'react-native';

import {SHADOW_STYLES} from '~constants/styles';
import {scaleSpace} from '~helpers';

const styles = StyleSheet.create({
  container: {
    marginTop: scaleSpace(32),
  },
  title: {
    fontWeight: '800',
  },
  commentBox: {
    backgroundColor: 'white',
    margin: scaleSpace(12),
    paddingVertical: scaleSpace(16),
    paddingHorizontal: scaleSpace(12),
    borderRadius: 20,
    ...SHADOW_STYLES,
  },
  commentBody: {
    width: '100%',
  },
  line: {
    width: '100%',
    height: 0.2,
    backgroundColor: 'black',
    marginVertical: scaleSpace(12),
  },
});

export default styles;

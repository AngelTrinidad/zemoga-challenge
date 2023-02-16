import {StyleSheet} from 'react-native';

import {scaleSpace} from '~helpers';

const styles = StyleSheet.create({
  container: {
    marginTop: scaleSpace(24),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  name: {
    fontWeight: '800',
    marginBottom: scaleSpace(4),
  },
});

export default styles;

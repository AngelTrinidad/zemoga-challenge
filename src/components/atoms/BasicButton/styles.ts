import {StyleSheet} from 'react-native';

import {scaleSpace} from '~helpers';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    minHeight: scaleSpace(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});

export default styles;

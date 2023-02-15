import {StyleSheet} from 'react-native';

import {SHADOW_STYLES} from '~constants/styles';
import {scaleSpace} from '~helpers';

const PADDING_HORIZONTAL = scaleSpace(12);

const PADDING_VERTICAL = scaleSpace(16);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: scaleSpace(32),
    ...SHADOW_STYLES,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: PADDING_VERTICAL,
    paddingHorizontal: PADDING_HORIZONTAL,
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
  },
  title: {
    flex: 1,
    color: 'white',
  },
  favContent: {
    height: '100%',
    minWidth: scaleSpace(24),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  body: {
    paddingTop: PADDING_VERTICAL,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: PADDING_HORIZONTAL,
  },
});

export default styles;

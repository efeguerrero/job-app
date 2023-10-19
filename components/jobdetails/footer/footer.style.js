import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small,
    backgroundColor: COLORS.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookmarkBtnContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookmarkBtn: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    tintColor: COLORS.secondary,
  },
  applyBtn: {
    height: 35,
    paddingHorizontal: 10,
    backgroundColor: '#FE7654',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.small,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default styles;

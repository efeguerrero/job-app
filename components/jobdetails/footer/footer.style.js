import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES, SHADOWS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.large,
    backgroundColor: COLORS.white,
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
    tintColor: COLORS.primary,
  },
  applyBtn: {
    height: 35,
    paddingHorizontal: 10,
    backgroundColor: COLORS.primary,
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

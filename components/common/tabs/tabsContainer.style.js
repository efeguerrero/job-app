import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  tabTitle: {
    textTransform: 'capitalize',
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginTop: 2,
  },
  tabsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: '100%',
    marginTop: SIZES.xLarge,
  },
  tab: {
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.gray2,
  },
  tabText: {
    fontFamily: FONT.medium,
    color: COLORS.gray2,
  },
});

export default styles;

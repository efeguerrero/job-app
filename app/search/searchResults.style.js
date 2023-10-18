import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
  },
  jobContainer: {
    width: '100%',
    display: 'flex',
    gap: 16,
    paddingVertical: 32,
    paddingBottom: 64,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

//Constant Imports
import { COLORS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
  },
  jobContainer: {
    width: '100%',
    display: 'flex',
    gap: 16,
    paddingVertical: 32,
    paddingBottom: 64,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
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
});

export default styles;

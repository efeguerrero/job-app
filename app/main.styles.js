import { StyleSheet } from 'react-native';

//Constant Imports
import { COLORS, FONT, SIZES } from '../constants/';

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.lightWhite },
  container: {
    justifyContent: 'center',
    height: '100%',
  },

  mainContainer: (headerHeight) => ({
    marginTop: -headerHeight + 16,
    flex: 1,
    padding: SIZES.medium,
    justifyContent: 'center',
  }),
  creditsContainer: {
    paddingVertical: 16,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  creditText: {
    fontFamily: FONT.regular,
  },
  creditTextStrong: {
    color: COLORS.tertiary,
  },
});

export default styles;

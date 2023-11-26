import { StyleSheet } from 'react-native';

import { COLORS, DARK_COLORS, FONT, LIGHT_COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  searchTitle: (isNightMode) => ({
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: isNightMode ? DARK_COLORS.white : LIGHT_COLORS.primary,
  }),
  noOfSearchedJobs: (isNightMode) => ({
    marginTop: 2,
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: isNightMode ? DARK_COLORS.white : LIGHT_COLORS.primary,
  }),
  loaderContainer: {
    marginTop: SIZES.medium,
  },
  footerContainer: {
    marginTop: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  paginationButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LIGHT_COLORS.tertiary,
  },
  paginationImage: {
    width: '60%',
    height: '60%',
    tintColor: COLORS.white,
  },
  paginationTextBox: (isNightMode) => ({
    width: 30,
    height: 30,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isNightMode
      ? DARK_COLORS.darkGreyInput
      : LIGHT_COLORS.lightWhite,
  }),
  paginationText: (isNightMode) => ({
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: isNightMode ? DARK_COLORS.white : LIGHT_COLORS.primary,
  }),
});

export default styles;

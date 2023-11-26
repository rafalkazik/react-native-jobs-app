import { StyleSheet } from 'react-native';

import {
  COLORS,
  DARK_COLORS,
  FONT,
  LIGHT_COLORS,
  SIZES,
} from '../../../constants';

const styles = StyleSheet.create({
  container: (isNightMode) => ({
    marginTop: SIZES.large,
    backgroundColor: isNightMode
      ? DARK_COLORS.darkGreyInput
      : LIGHT_COLORS.white,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  }),
  title: (isNightMode) => ({
    fontSize: SIZES.large,
    color: isNightMode ? DARK_COLORS.white : LIGHT_COLORS.primary,
    fontFamily: FONT.bold,
  }),
  pointsContainer: {
    marginVertical: SIZES.small,
  },
  pointWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: SIZES.small / 1.25,
  },
  pointDot: (isNightMode) => ({
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: isNightMode ? DARK_COLORS.white : LIGHT_COLORS.gray2,
    marginTop: 6,
  }),
  pointText: (isNightMode) => ({
    fontSize: SIZES.medium - 2,
    color: isNightMode ? DARK_COLORS.white : LIGHT_COLORS.gray2,
    fontFamily: FONT.regular,
    marginLeft: SIZES.small,
  }),
});

export default styles;

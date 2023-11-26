import { StyleSheet } from 'react-native';

import {
  COLORS,
  DARK_COLORS,
  LIGHT_COLORS,
  FONT,
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
  headText: (isNightMode) => ({
    fontSize: SIZES.large,
    color: isNightMode ? DARK_COLORS.white : LIGHT_COLORS.primary,
    fontFamily: FONT.bold,
  }),
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: (isNightMode) => ({
    fontSize: SIZES.medium - 2,
    color: isNightMode ? DARK_COLORS.white : LIGHT_COLORS.primary,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 1.25,
  }),
});

export default styles;

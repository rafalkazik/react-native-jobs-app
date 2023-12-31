import { StyleSheet } from 'react-native';

import { COLORS, DARK_COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  btnContainer: (isNightMode) => ({
    width: 40,
    height: 40,
    backgroundColor: isNightMode ? DARK_COLORS.darkGreyInput : COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  btnImg: (dimension, isNightMode) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
    tintColor: isNightMode ? DARK_COLORS.white : COLORS.primary,
  }),
});

export default styles;

import { StyleSheet } from 'react-native';

import {
  COLORS,
  DARK_COLORS,
  LIGHT_COLORS,
  SHADOWS,
  SIZES,
} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: (name, activeTab, isNightMode) => ({
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor:
      name === activeTab
        ? LIGHT_COLORS.tertiary
        : isNightMode
        ? DARK_COLORS.darkGreyInput
        : LIGHT_COLORS.lightWhite,
    borderRadius: SIZES.medium,
    marginLeft: 2,
    shadowColor: COLORS.white,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: 'DMMedium',
    fontSize: SIZES.small,
    color: name === activeTab ? LIGHT_COLORS.lightWhite : COLORS.gray,
  }),
});

export default styles;

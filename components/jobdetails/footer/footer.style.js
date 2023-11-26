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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: isNightMode
      ? DARK_COLORS.darkGreyInput
      : LIGHT_COLORS.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  }),
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: LIGHT_COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeBtnImage: {
    width: '40%',
    height: '40%',
    tintColor: LIGHT_COLORS.tertiary,
  },
  applyBtn: {
    flex: 1,
    backgroundColor: LIGHT_COLORS.tertiary,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default styles;

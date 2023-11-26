import { StyleSheet } from 'react-native';

import {
  COLORS,
  DARK_COLORS,
  FONT,
  LIGHT_COLORS,
  SIZES,
} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: (isNightMode) => ({
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: isNightMode ? DARK_COLORS.white : COLORS.primary,
  }),
  welcomeMessage: (isNightMode) => ({
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: isNightMode ? DARK_COLORS.white : COLORS.primary,
    marginTop: 2,
  }),
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: (isNightMode) => ({
    flex: 1,
    backgroundColor: isNightMode
      ? DARK_COLORS.darkGreyInput
      : LIGHT_COLORS.white,
    marginRight: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    height: '100%',
    border: '1px solid red',
  }),
  nightModeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
    minWidth: 50,
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: '100%',
    backgroundColor: LIGHT_COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtnImage: {
    width: '50%',
    height: '50%',
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: '100%',
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;

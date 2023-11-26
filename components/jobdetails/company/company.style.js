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
    marginVertical: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: SIZES.large,
  },
  logoImage: {
    width: '80%',
    height: '80%',
  },
  jobTitleBox: {
    marginTop: SIZES.small,
  },
  jobTitle: (isNightMode) => ({
    fontSize: SIZES.large,
    color: isNightMode ? DARK_COLORS.white : LIGHT_COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: 'center',
  }),
  companyInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyName: (isNightMode) => ({
    fontSize: SIZES.medium - 2,
    color: isNightMode ? DARK_COLORS.white : LIGHT_COLORS.primary,
    fontFamily: FONT.medium,
  }),
  locationBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  locationName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
});

export default styles;

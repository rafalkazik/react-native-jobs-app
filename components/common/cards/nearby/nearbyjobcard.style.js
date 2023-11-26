import { StyleSheet } from 'react-native';

import { COLORS, DARK_COLORS, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  container: (isNightMode) => ({
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: isNightMode ? DARK_COLORS.darkGreyInput : COLORS.white,
    shadowColor: COLORS.white,
  }),
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '70%',
    height: '70%',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: (isNightMode) => ({
    fontSize: SIZES.medium,
    fontFamily: 'DMBold',
    color: isNightMode ? DARK_COLORS.white : COLORS.primary,
  }),
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: 'DMRegular',
    color: COLORS.gray,
    marginTop: 3,
    textTransform: 'capitalize',
  },
});

export default styles;

import { StyleSheet } from 'react-native';

import {
  COLORS,
  DARK_COLORS,
  FONT,
  LIGHT_COLORS,
  SHADOWS,
  SIZES,
} from '../../../../constants';

const styles = StyleSheet.create({
  container: (selectedJob, item, isNightMode) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor:
      selectedJob === item.job_id
        ? LIGHT_COLORS.tertiary
        : isNightMode
        ? DARK_COLORS.darkGreyInput
        : '#fff',
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? '#FFF' : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  logoImage: {
    width: '70%',
    height: '70%',
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob, item, isNightMode) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color:
      selectedJob === item.job_id
        ? LIGHT_COLORS.lightWhite
        : isNightMode
        ? DARK_COLORS.white
        : LIGHT_COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  publisher: (selectedJob) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
  },
});

export default styles;

import { StyleSheet } from 'react-native';

import {
  FONT,
  SIZES,
  COLORS,
  DARK_COLORS,
  LIGHT_COLORS,
} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: (isNightMode) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: isNightMode ? DARK_COLORS.primary : LIGHT_COLORS.primary,
  }),
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;

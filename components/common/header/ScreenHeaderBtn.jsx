import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './screenheader.style';
import { useTheme } from '../../../context/ThemeContext';

const ScreenHeaderBtn = ({ iconUrl, dimensions, handlePress }) => {
  const { isNightMode } = useTheme();
  return (
    <TouchableOpacity
      style={styles.btnContainer(isNightMode)}
      onPress={handlePress}
    >
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimensions, isNightMode)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;

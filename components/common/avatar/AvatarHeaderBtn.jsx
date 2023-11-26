import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './avatarheader.style';

const AvatarHeaderBtn = ({ iconUrl, dimensions, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimensions)}
      />
    </TouchableOpacity>
  );
};

export default AvatarHeaderBtn;

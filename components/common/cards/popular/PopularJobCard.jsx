import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './popularjobcard.style';
import { useTheme } from '../../../../context/ThemeContext';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  const { isNightMode } = useTheme();

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item, isNightMode)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri:
              item?.employer_logo === null
                ? 'https://i.fbcd.co/products/resized/resized-1500-1000/35fa221b9125551fc13446133b8d980337655e15f27b10dfb205db407ab13975.webp'
                : item?.employer_logo,
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item?.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text
          style={styles.jobName(selectedJob, item, isNightMode)}
          numberOfLines={1}
        >
          {item?.job_title}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {item?.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;

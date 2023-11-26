import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './company.style';
import { icons } from '../../../constants';
import { useTheme } from '../../../context/ThemeContext';

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  const { isNightMode } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri:
              companyLogo === null
                ? 'https://i.fbcd.co/products/resized/resized-1500-1000/35fa221b9125551fc13446133b8d980337655e15f27b10dfb205db407ab13975.webp'
                : companyLogo,
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle(isNightMode)}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName(isNightMode)}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;

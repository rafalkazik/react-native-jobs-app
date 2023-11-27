import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import styles from './footer.style';
import { icons } from '../../../constants';

const Footer = ({ url, isNightMode }) => {
  return (
    <View style={styles.container(isNightMode)}>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

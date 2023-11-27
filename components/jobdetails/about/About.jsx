import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import styles from './about.style';

const About = ({ info, customContent }) => {
  const { isNightMode } = useTheme();

  return (
    <View style={styles.container(isNightMode)}>
      <Text style={styles.headText(isNightMode)}>
        {customContent ? customContent : 'About this job:'}
      </Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText(isNightMode)}>{info}</Text>
      </View>
    </View>
  );
};

export default About;

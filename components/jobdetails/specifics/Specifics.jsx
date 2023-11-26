import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import styles from './specifics.style';

const Specifics = ({ title, points }) => {
  const { isNightMode } = useTheme();

  return (
    <View style={styles.container(isNightMode)}>
      <Text style={styles.title(isNightMode)}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((point, index) => (
          <View key={index} style={styles.pointWrapper}>
            <Text style={styles.pointDot(isNightMode)} />
            <Text style={styles.pointText(isNightMode)}>{point}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;

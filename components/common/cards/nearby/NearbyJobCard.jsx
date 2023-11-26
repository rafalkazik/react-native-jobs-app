import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './nearbyjobcard.style';
import { useTheme } from '../../../../context/ThemeContext';

const NearbyJobCard = ({ job, handleNavigate }) => {
  const { isNightMode } = useTheme();

  return (
    <TouchableOpacity
      style={styles.container(isNightMode)}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri:
              job?.employer_logo === null
                ? 'https://i.fbcd.co/products/resized/resized-1500-1000/35fa221b9125551fc13446133b8d980337655e15f27b10dfb205db407ab13975.webp'
                : job?.employer_logo,
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName(isNightMode)} numberOfLines={1}>
          {job?.job_title}
        </Text>
        <Text style={styles.jobType} numberOfLines={1}>
          {job?.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;

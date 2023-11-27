import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './nearbyjobs.style';
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';
import { useTheme } from '../../../context/ThemeContext';

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: 1,
  });

  const { isNightMode } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle(isNightMode)}>Nearby Jobs</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={`${COLORS.primary}`} />
        ) : error ? (
          <Text>{'Something went wrong :/'}</Text>
        ) : (
          data?.map((item) => (
            <NearbyJobCard
              job={item}
              key={`nearby-job-${item?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${item?.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;

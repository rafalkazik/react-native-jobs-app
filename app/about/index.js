import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router';
import { useState } from 'react';
import { JobAbout, JobFooter, ScreenHeaderBtn } from '../../components';
import {
  COLORS,
  DARK_COLORS,
  LIGHT_COLORS,
  icons,
  SIZES,
} from '../../constants';
import useFetch from '../../hook/useFetch';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { useTheme } from '../../context/ThemeContext';

const exampleTextAboutUs = `
Welcome to our JobApp, where we connect talent with opportunity! At JobApp, we believe in making the job search journey seamless and empowering. Our mission is to bridge the gap between employers and job seekers, creating a platform that fosters growth and success.

What sets us apart:

Efficiency: We streamline the hiring process to save you time and effort.

Personalization: Tailored job recommendations based on your skills and preferences.

Inclusivity: A diverse range of job opportunities for everyone.

Innovation: We leverage cutting-edge technology to bring you the latest career advancements.

Join us in shaping the future of work. Discover your next career move with JobApp.
`;

const About = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch('job-details', {
    job_id: params.id,
  });

  const [refreshing, setRefreshing] = useState(false);

  const { isNightMode } = useTheme();

  const onRefresh = () => {};

  const handleShare = async () => {
    try {
      if (await Sharing.isAvailableAsync()) {
        const content = 'Content to share';
        const filePath = `${FileSystem.cacheDirectory}share.txt`;

        await FileSystem.writeAsStringAsync(filePath, content);

        await Sharing.shareAsync(filePath);
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isNightMode
          ? DARK_COLORS.darkGrey
          : LIGHT_COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: isNightMode
              ? DARK_COLORS.darkGrey
              : LIGHT_COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimensions='60%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimensions='60%'
              handlePress={handleShare}
            />
          ),
          headerTitle: '',
        }}
      ></Stack.Screen>

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <JobAbout
                info={exampleTextAboutUs ?? 'No data'}
                customContent={'About Us'}
              />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default About;

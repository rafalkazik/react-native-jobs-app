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

const exampleTextContact = `
Email: support@jobapp123.com
Phone: +1 (555) 123-4567
Business Inquiries:

Email: info@yourapp.com
Phone: +1 (555) 987-6543
Visit Us:
JobApp Headquarters
123 Job Seeker Street
Tech Hub City, TS 98765
United States
`;

const Contact = () => {
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
                info={exampleTextContact ?? 'No data'}
                customContent={'Contact Us'}
              />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default Contact;

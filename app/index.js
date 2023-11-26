import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  COLORS,
  DARK_COLORS,
  icons,
  images,
  LIGHT_COLORS,
  SIZES,
} from '../constants';
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  AvatarHeaderBtn,
  Welcome,
} from '../components';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');

  const { isNightMode } = useTheme();

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
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimensions='60%' />
          ),
          headerRight: () => (
            <AvatarHeaderBtn iconUrl={images.profile} dimensions='100%' />
          ),
          headerTitle: '',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <StatusBar style={isNightMode ? 'light' : 'dark'} />
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

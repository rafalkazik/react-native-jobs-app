import {
  FlatList,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
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

const menuList = [
  { key: 'Home', url: '/' },
  { key: 'About', url: '/about' },
  { key: 'Contact', url: '/contact' },
];

const Home = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { isNightMode } = useTheme();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
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
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={isDrawerOpen ? icons.xmark : icons.menu}
              dimensions='60%'
              handlePress={isDrawerOpen ? closeDrawer : openDrawer}
            />
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
          {isDrawerOpen && (
            <View
              style={{
                backgroundColor: isNightMode
                  ? DARK_COLORS.darkGrey
                  : LIGHT_COLORS.lightWhite,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                borderBottomWidth: 1,
                borderBottomColor: isNightMode
                  ? DARK_COLORS.darkGreyInput
                  : LIGHT_COLORS.primary,
                marginBottom: SIZES.xxLarge,
              }}
            >
              <TouchableOpacity
                onPress={closeDrawer}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <FlatList
                  data={menuList}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => {
                        router.push(item.url);
                        closeDrawer();
                      }}
                    >
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: SIZES.xxLarge,
                          color: isNightMode
                            ? DARK_COLORS.white
                            : LIGHT_COLORS.primary,
                        }}
                      >
                        {item.key}
                      </Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.key}
                  contentContainerStyle={{
                    padding: SIZES.xxLarge,
                    rowGap: SIZES.xxLarge,
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
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

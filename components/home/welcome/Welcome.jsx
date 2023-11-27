import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Switch,
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import {
  icons,
  SIZES,
  COLORS,
  LIGHT_COLORS,
  DARK_COLORS,
} from '../../../constants';
import { useTheme } from '../../../context/ThemeContext';

const jobTypes = [
  'Full Time',
  'Part Time',
  'Contractor',
  'Internship',
  'Temporary',
];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full Time');

  const { theme, isNightMode, toggleNightMode } = useTheme();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName(isNightMode)}>Hello Rafał</Text>
        <View style={styles.topContainer}>
          <Text style={styles.welcomeMessage(isNightMode)}>
            Find your dream job
          </Text>

          <View style={styles.nightModeContainer}>
            <Text
              style={{
                color: isNightMode ? DARK_COLORS.gray : LIGHT_COLORS.gray2,
              }}
            >
              {isNightMode ? 'Night Mode' : 'Day Mode'}
            </Text>
            <Switch
              value={isNightMode}
              onValueChange={toggleNightMode}
              thumbColor={
                isNightMode ? DARK_COLORS.lightWhite : LIGHT_COLORS.lightWhite
              }
              trackColor={{
                false: LIGHT_COLORS.lightWhite,
                true: DARK_COLORS.tertiary,
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper(isNightMode)}>
          <TextInput
            style={styles.searchInput(isNightMode)}
            value={searchTerm}
            onChangeText={(text) => {
              setSearchTerm(text);
            }}
            placeholder='Search for a job'
            placeholderTextColor={`${LIGHT_COLORS.gray}`}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;

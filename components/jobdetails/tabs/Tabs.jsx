import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SIZES } from '../../../constants';
import styles from './tabs.style';

const TabButton = ({ name, activeTab, onHandleSearchType, isNightMode }) => {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab, isNightMode)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};

const Tabs = ({ tabs, activeTab, setActiveTab, isNightMode }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
            isNightMode={isNightMode}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;

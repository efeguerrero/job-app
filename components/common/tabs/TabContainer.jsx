import React from 'react';

//React Native Imports
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

//Styles Imports
import styles from './tabsContainer.style';

//Constant Imports
import { SIZES } from '../../../constants';

const TabContainer = ({ title, data }) => {
  return (
    <View style={styles.tabsContainer}>
      <Text style={styles.tabTitle}>{title}</Text>
      <FlatList
        keyExtractor={(item) => item}
        contentContainerStyle={{
          columnGap: SIZES.small,
          rowGap: SIZES.small,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              router.push(`/search/${item}`);
            }}
          >
            <Text style={styles.tabText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TabContainer;

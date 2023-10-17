import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './tabs.style';

//Constants Imports
import { SIZES } from '../../../constants';

//Component Imports
import TabButton from './TabButton';

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{
          width: '100%',
          justifyContent: 'space-evenly',
          columnGap: SIZES.small / 2,
        }}
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
      />
    </View>
  );
};

export default Tabs;

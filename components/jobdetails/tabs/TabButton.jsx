import React from 'react';

//Styles Imports
import styles from './tabs.style';

import { TouchableOpacity, Text } from 'react-native';

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};

export default TabButton;

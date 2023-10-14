import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './popularjobcard.style';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      // onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: item.employer_logo }}
          resizeMode="contain"
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default PopularJobCard;

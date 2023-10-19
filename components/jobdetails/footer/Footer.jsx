import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

import styles from './footer.style';

//Constants imports
import { icons } from '../../../constants';

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bookmarkBtnContainer}>
        <Image
          source={icons.bookmark}
          resizeMode="cover"
          style={styles.bookmarkBtn}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Footer;

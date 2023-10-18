import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from './headerBtn.style';

const HeaderBtn = ({ icon, dimension, color, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={icon}
        resizeMode="cover"
        style={styles.btnImg(dimension, color)}
      />
    </TouchableOpacity>
  );
};

export default HeaderBtn;

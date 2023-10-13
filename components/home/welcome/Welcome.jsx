import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const jobTypes = ['Full-Time', 'Part-Time', 'Internship', 'Freelance'];

const Welcome = () => {
  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState('Full-Time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello John!</Text>
        <Text style={styles.welcomeMessage}>Lets find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onChange={() => {}}
            placeholder="What are you looking for?"
            value=""
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          keyExtractor={(item) => item}
          contentContainerStyle={{
            columnGap: SIZES.small,
            rowGap: SIZES.small,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                // router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;

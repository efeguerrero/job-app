import React, { useState } from 'react';

//React Native Imports
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

//Expo Router Imports
import { useRouter } from 'expo-router';

//Styles and Constants Imports
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const popularPositions = ['Full-Stack', 'Backend', 'Frontend', 'DevOps'];
const popularTech = ['React', 'Python', 'Javascript', 'Java', 'Golang'];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome to Jobster!</Text>
        <Text style={styles.welcomeMessage}>Lets find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
            value={searchTerm}
          />
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => {
            handleClick();
          }}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 16 }}>
        <View style={styles.tabsContainer}>
          <Text style={styles.workFilters}>Search by roles</Text>
          <FlatList
            keyExtractor={(item) => item}
            contentContainerStyle={{
              columnGap: SIZES.small,
              rowGap: SIZES.small,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
            data={popularPositions}
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
        <View style={styles.tabsContainer}>
          <Text style={styles.workFilters}>Search by popular tech</Text>
          <FlatList
            keyExtractor={(item) => item}
            contentContainerStyle={{
              columnGap: SIZES.small,
              rowGap: SIZES.small,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
            data={popularTech}
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
      </View>
    </View>
  );
};

export default Welcome;

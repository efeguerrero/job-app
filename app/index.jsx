import { useState } from 'react';

//React Native imports
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

//Constants
import { COLORS, icons, images, SIZES } from '../constants';

//Components Imports
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from '../components';

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: '',
          headerRight: () => (
            <ScreenHeaderBtn icon={images.profile} dimension="100%" />
          ),
          headerLeft: () => (
            <ScreenHeaderBtn icon={icons.menu} dimension="60%" />
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

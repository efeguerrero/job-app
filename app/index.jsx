import { useState } from 'react';

//React Native imports
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';

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
  const [searchTerm, setSearchTerm] = useState('');
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView
      id="safearea"
      style={{ flex: 1, backgroundColor: COLORS.lightWhite }}
    >
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
      <ScrollView
        id="sds"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <View
          style={{
            marginTop: -headerHeight,
            flex: 1,
            padding: SIZES.medium,
            justifyContent: 'center',
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`search/${searchTerm}`);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

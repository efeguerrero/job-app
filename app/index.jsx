//React Native imports
import { View, Text, SafeAreaView, ScrollView, Linking } from 'react-native';
import { Stack } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';

//Expo Status Bar
import { StatusBar } from 'expo-status-bar';

//Constants
import { COLORS, icons, SIZES, FONT } from '../constants';

//Expo Router Imports
import { useRouter } from 'expo-router';

//Store Import
import { useSavedJobsStore } from '../store/store';

//Components Imports
import { Welcome } from '../components';
import HeaderBtn from '../components/common/header/HeaderBtn';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();
  const headerHeight = useHeaderHeight();
  const getSavedJobs = useSavedJobsStore((state) => state.getSavedJobs);

  useEffect(() => {
    getSavedJobs();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: '',
          headerRight: () => (
            <HeaderBtn
              icon={icons.bookmarkOutline}
              dimension="60%"
              handlePress={() => router.push('/favorites/')}
            />
          ),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <View
          style={{
            marginTop: -headerHeight + 16,
            flex: 1,
            padding: SIZES.medium,
            justifyContent: 'center',
          }}
        >
          <Welcome />
        </View>
      </ScrollView>
      <View
        style={{
          paddingVertical: 16,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => Linking.openURL('https://franguerrero.dev/')}
        >
          <Text style={{ fontFamily: FONT.regular }}>
            Developed by{' '}
            <Text style={{ color: COLORS.tertiary }}>{`{fg}`}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Home;

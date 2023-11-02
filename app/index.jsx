//React Native imports
import { View, Text, SafeAreaView, ScrollView, Linking } from 'react-native';
import { Stack } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';

//Expo Status Bar
import { StatusBar } from 'expo-status-bar';

//Constants
import { COLORS, icons } from '../constants';

//Expo Router Imports
import { useRouter } from 'expo-router';

//Styles Import
import styles from './main.styles';

//Components Imports
import { Welcome } from '../components';
import HeaderBtn from '../components/common/header/HeaderBtn';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {
  const router = useRouter();
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={styles.safeArea}>
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
        contentContainerStyle={styles.container}
      >
        <View style={styles.mainContainer(headerHeight)}>
          <Welcome />
        </View>
      </ScrollView>
      <View style={styles.creditsContainer}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://franguerrero.dev/')}
        >
          <Text style={styles.creditText}>
            Developed by <Text style={styles.creditTextStrong}>{`{fg}`}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Home;

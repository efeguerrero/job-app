import { useState } from 'react';

//React Native imports
import { View, Text, SafeAreaView, ScrollView, Linking } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';

//Constants
import { COLORS, icons, SIZES, FONT } from '../constants';

//Components Imports
import { Welcome } from '../components';
import HeaderBtn from '../components/common/header/HeaderBtn';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
            <HeaderBtn
              icon={icons.bookmark}
              dimension="60%"
              color={COLORS.gray}
            />
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
            marginTop: -headerHeight + 16,
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

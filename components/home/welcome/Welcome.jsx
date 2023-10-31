import { useState } from 'react';

//React Native Imports
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

//Expo Router Imports
import { useRouter } from 'expo-router';

//Component Imports
import TabContainer from '../../common/tabs/TabContainer';

//Styles and Constants Imports
import styles from './welcome.style';
import { icons, COLORS } from '../../../constants';

const popularRoles = ['Full-Stack', 'Backend', 'Frontend', 'DevOps'];
const popularTech = ['React', 'Python', 'Javascript', 'Java', 'Golang'];

const Welcome = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm) {
      router.push(`search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome to Jobster!</Text>
        <Text style={styles.welcomeMessage}>Time to find your new job.</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            onSubmitEditing={() => handleSearch()}
            enterKeyHint="search"
            inputMode="search"
            cursorColor={COLORS.tertiary}
            style={styles.searchInput}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
            value={searchTerm}
          />
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => handleSearch()}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 16 }}>
        <TabContainer title="search by roles" data={popularRoles} />
        <TabContainer title="search by popular tech" data={popularTech} />
      </View>
    </View>
  );
};

export default Welcome;

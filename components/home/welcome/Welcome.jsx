//React Native Imports
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

//Component Imports
import TabContainer from '../../common/tabs/TabContainer';

//Styles and Constants Imports
import styles from './welcome.style';
import { icons } from '../../../constants';

const popularRoles = ['Full-Stack', 'Backend', 'Frontend', 'DevOps'];
const popularTech = ['React', 'Python', 'Javascript', 'Java', 'Golang'];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
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
        <TabContainer title="search by roles" data={popularRoles} />
        <TabContainer title="search by popular tech" data={popularTech} />
      </View>
    </View>
  );
};

export default Welcome;

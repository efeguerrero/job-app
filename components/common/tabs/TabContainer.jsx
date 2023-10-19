//React Native Imports
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

//Expo Router Imports
import { useRouter } from 'expo-router';

//Styles Imports
import styles from './tabsContainer.style';

//Constant Imports
import { SIZES } from '../../../constants';

//Store Import
import useJobStore from '../../../store/store';

const TabContainer = ({ title, data }) => {
  const router = useRouter();
  const getJobData = useJobStore((state) => state.getJobData);

  return (
    <View style={styles.tabsContainer}>
      <Text style={styles.tabTitle}>{title}</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          columnGap: SIZES.small,
          rowGap: SIZES.small,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {data.map((item, index) => (
          <TouchableOpacity
            key={item + index}
            style={styles.tab}
            onPress={() => {
              getJobData(item);
              router.push(`/search/${item}`);
            }}
          >
            <Text style={styles.tabText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TabContainer;

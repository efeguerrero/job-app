import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import styles from './popularjobs.style';

//Components Imports
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

//Hooks
import useFetch from '../../../hooks/useFetch';

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            keyExtractor={(item) => item?.job_id}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
            data={[1, 2, 3, 4]}
            renderItem={({ item }) => <PopularJobCard item={item} />}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;

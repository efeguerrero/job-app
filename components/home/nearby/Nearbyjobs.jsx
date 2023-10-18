import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import { useRouter } from 'expo-router';
import { COLORS } from '../../../constants';
import styles from './nearbyjobs.style';

//Components Imports
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

//Hooks
import useFetch from '../../../hooks/useFetch';

const NearbyJobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('search', {
    query: 'React Developer',
    num_pages: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
      </View>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;

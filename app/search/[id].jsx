import { useEffect } from 'react';

import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  Alert,
} from 'react-native';

import { COLORS, icons } from '../../constants';
import styles from './searchResults.style';

//Expo Router Imports
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

//Components Imports
import JobCard from '../../components/common/cards/JobCard';
import HeaderBtn from '../../components/common/header/HeaderBtn';

//Store Import
import { useJobStore } from '../../store/store';

const Popularjobs = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const jobsData = useJobStore((state) => state.jobsData);
  const isLoading = useJobStore((state) => state.isLoading);
  const isError = useJobStore((state) => state.isError);
  const setIsErrorFalse = useJobStore((state) => state.setIsErrorFalse);
  const getJobData = useJobStore((state) => state.getJobData);

  const createAlert = () =>
    Alert.alert(
      'Error',
      'There was an error retrieving the data. Either your search was invalid or there was a server error. You will see stale jobs so that you can showcase the app anyway. Please try again later',
      [{ text: 'OK', onPress: () => setIsErrorFalse() }]
    );

  const displayJobData = () => {
    if (jobsData?.length) {
      return jobsData?.map((job) => (
        <JobCard
          job={job}
          key={`nearby-job-${job?.job_id}`}
          handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
        />
      ));
    } else {
      return <Text>No results found for your search.</Text>;
    }
  };

  useEffect(() => {
    getJobData(id);
  }, [id]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.lightWhite },
          title: ' ',
          headerBackVisible: false,
          headerLeft: () => (
            <HeaderBtn
              icon={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Job results for : {id}</Text>
        </View>

        <View style={styles.jobContainer}>
          {isError && createAlert()}
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.tertiary} />
          ) : (
            displayJobData()
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Popularjobs;

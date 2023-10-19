import { useEffect } from 'react';

import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import { COLORS, icons } from '../../constants';
import styles from './searchResults.style';

//Expo Router Imports
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router';

//Components Imports
import JobCard from '../../components/common/cards/JobCard';
import HeaderBtn from '../../components/common/header/HeaderBtn';

//Store Import
import useJobStore from '../../store/store';

const Popularjobs = () => {
  const router = useRouter();
  const { id } = useGlobalSearchParams();
  const jobsData = useJobStore((state) => state.jobsData);
  const isLoading = useJobStore((state) => state.isLoading);

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
          {isLoading ? (
            <ActivityIndicator size="large" colors={COLORS.primary} />
          ) : (
            jobsData?.map((job) => (
              <JobCard
                job={job}
                key={`nearby-job-${job?.job_id}`}
                handleNavigate={() =>
                  router.push(`/job-details/${job?.job_id}`)
                }
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Popularjobs;

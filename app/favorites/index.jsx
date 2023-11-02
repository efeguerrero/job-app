import React from 'react';

//React Native Imports
import { ScrollView, View, Text, SafeAreaView } from 'react-native';

//Expo Imports
import { Stack, useRouter } from 'expo-router';

//Component Imports
import HeaderBtn from '../../components/common/header/HeaderBtn';
import JobCard from '../../components/common/cards/JobCard';

//Store Imports
import { useSavedJobsStore } from '../../store/store';

//Styles Imports
import styles from './favorites.style';

//Constant Imports
import { COLORS, icons } from '../../constants';

const Favorites = () => {
  const savedJobs = useSavedJobsStore((state) => state.savedJobs);

  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
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
          <Text style={styles.headerTitle}>
            {savedJobs.length ? 'Your saved jobs' : 'There are no saved jobs.'}
          </Text>
        </View>
        <View style={styles.jobContainer}>
          {savedJobs?.map((job) => (
            <JobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;

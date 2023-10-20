import React from 'react';

//React Native Imports
import { ScrollView, View, Text, SafeAreaView, StyleSheet } from 'react-native';

//Expo Imports
import { Stack, useRouter } from 'expo-router';

//Component Imports
import HeaderBtn from '../../components/common/header/HeaderBtn';
import JobCard from '../../components/common/cards/JobCard';

//import dummy data
import dummyData from '../../store/dummyData.json';

//Constant Imports
import { COLORS, icons, FONT, SIZES } from '../../constants';

const Favorites = () => {
  const jobsData = dummyData.data;
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
          <Text style={styles.headerTitle}>Your saved jobs</Text>
        </View>
        <View style={styles.jobContainer}>
          {jobsData?.map((job) => (
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
  },
  jobContainer: {
    width: '100%',
    display: 'flex',
    gap: 16,
    paddingVertical: 32,
    paddingBottom: 64,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
});

export default Favorites;

import { useState, useCallback } from 'react';

//React Native Imports
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

//Expo Router Imports
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router';

//Components Imports
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Sepcifics,
} from '../../components';

//Constants
import { COLORS, icons, SIZES } from '../../constants';

//Hooks
import useFetch from '../../hooks/useFetch';

const JobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch('job-details', {
    job_id: params.id,
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.lightWhite },
          title: '',
          headerBackVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn icon={icons.share} dimension="60%" />
          ),
          headerLeft: () => (
            <ScreenHeaderBtn
              icon={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong...</Text>
          ) : data.length === 0 ? (
            <Text>No data found</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />
              <JobTabs />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
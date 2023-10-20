import { useState } from 'react';

//React Native Imports
import { Text, View, SafeAreaView, ScrollView } from 'react-native';

//Expo Router Imports
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

//Components Imports
import HeaderBtn from '../../components/common/header/HeaderBtn';
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  Specifics,
} from '../../components';

//Constants
import { COLORS, icons, SIZES } from '../../constants';

//Store Import
import { useJobStore, useSavedJobsStore } from '../../store/store';

const tabs = ['About', 'Qualifications', 'Responsibilities'];

const JobDetails = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const params = useLocalSearchParams();
  const router = useRouter();

  const jobsData = useJobStore((state) => state.jobsData);
  const selectedJob = jobsData.find((job) => job.job_id === params.id);
  const setSavedJobs = useSavedJobsStore((state) => state.setSavedJobs);

  const displayTabContent = () => {
    switch (activeTab) {
      case 'Qualifications':
        return (
          <Specifics
            title={activeTab}
            points={
              selectedJob.job_highlights?.Qualifications ?? [
                'No data available',
              ]
            }
          />
        );

      case 'About':
        return (
          <JobAbout info={selectedJob.job_description ?? 'No data available'} />
        );

      case 'Responsibilities':
        return (
          <Specifics
            title={activeTab}
            points={
              selectedJob.job_highlights?.Responsibilities ?? [
                'No data available',
              ]
            }
          />
        );

      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.lightWhite },
          title: '',
          headerBackVisible: false,
          headerRight: () => <HeaderBtn icon={icons.share} dimension="60%" />,
          headerLeft: () => (
            <HeaderBtn
              icon={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
        }}
      />
      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          {selectedJob ? (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={selectedJob.employer_logo}
                jobTitle={selectedJob.job_title}
                companyName={selectedJob.employer_name}
                location={selectedJob.job_country}
              />
              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          ) : (
            <Text>No data found</Text>
          )}
        </ScrollView>
        <JobFooter
          handleSaveJob={() => setSavedJobs(selectedJob)}
          url={
            selectedJob?.job_google_link ??
            'https://careers.google.com/jobs/results'
          }
        />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;

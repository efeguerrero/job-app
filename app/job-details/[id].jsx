import { useState, useMemo } from 'react';

//React Native Imports
import { Text, View, SafeAreaView, ScrollView, Share } from 'react-native';

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
  const savedJobs = useSavedJobsStore((state) => state.savedJobs);
  //The selected job detail we are looking for is either from jobsData (search result) or from saved jobs. So we check boths and use that.
  //We also memoize the value so that it nevery changes between renders unless params.id changes, meaning we are at a new job route.
  const selectedJob = useMemo(
    () =>
      jobsData.find((job) => job.job_id === params.id) ||
      savedJobs.find((job) => job.job_id === params.id),
    [params.id]
  );
  const setSavedJob = useSavedJobsStore((state) => state.setSavedJob);
  const removeSavedJob = useSavedJobsStore((state) => state.removeSavedJob);

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

  //Sharing Async Function Definition
  const onShare = async () => {
    try {
      await Share.share({
        url:
          selectedJob?.job_google_link ??
          'https://careers.google.com/jobs/results',
        message:
          selectedJob?.job_google_link ??
          'https://careers.google.com/jobs/results',
      });
    } catch (error) {
      //console.log(error);
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
          headerRight: () => (
            <HeaderBtn
              icon={icons.share}
              dimension="60%"
              handlePress={() => onShare()}
            />
          ),
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
            <Text>No job data found</Text>
          )}
        </ScrollView>
        <JobFooter
          jobId={params.id}
          handleSaveJob={() => setSavedJob(selectedJob)}
          handleRemoveJob={() => removeSavedJob(selectedJob)}
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

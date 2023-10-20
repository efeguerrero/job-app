import { create } from 'zustand';

import axios from 'axios';
import { RAPID_API_KEY } from '@env';
const rapidApiKey = RAPID_API_KEY;

//Dummy Data Import
import dummyData from './dummyData.json';

//Async Storage Hooks Import
import { getJobData, storeJobData } from '../hooks/setStorage';

const useJobStore = create((set) => ({
  jobsData: [],
  isLoading: false,
  getJobData: ({ query }) =>
    set(async () => {
      const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
        params: {
          query: query,
        },
      };

      set(() => ({ isLoading: true }));
      try {
        // const res = await axios.request(options);
        //Working with dummy data first to aviot quota limit on api
        set(() => ({ jobsData: dummyData.data }));
        set(() => ({ isLoading: false }));
      } catch (error) {
        alert(
          'There was an error fetching the data or API quota limit was reached. You will see stale data so that you can showcase the app anyway.'
        );
        set(() => ({ jobsData: dummyData.data }));
        console.log(error);
      } finally {
        set(() => ({ isLoading: false }));
      }
    }),
}));

const useSavedJobsStore = create((set) => ({
  savedJobs: [],
  getSavedJobs: async () => {
    set({ savedJobs: await getJobData() });
  },
  setSavedJobs: async (job) => {
    const savedJobs = useSavedJobsStore.getState().savedJobs;

    const findJobInSaved = savedJobs.find(
      (jobItem) => jobItem.job_id === job.job_id
    )
      ? true
      : false;

    if (!findJobInSaved) {
      const newSavedJobs = [...savedJobs, job];
      await storeJobData(JSON.stringify(newSavedJobs));
      set({ savedJobs: newSavedJobs });
    } else {
      console.log('job was already saved in favs');
    }
  },
}));

export { useJobStore, useSavedJobsStore };

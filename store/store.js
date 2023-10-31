import { create } from 'zustand';

import axios from 'axios';

const rapidApiKey = process.env.EXPO_PUBLIC_RAPID_API_KEY;

//Dummy Data Import
import dummyData from './dummyData.json';

//Async Storage Hooks Import
import { getJobData, storeJobData } from '../hooks/setStorage';

const useJobStore = create((set) => ({
  jobsData: [],
  isLoading: false,
  isError: false,
  getJobData: (query) =>
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
        const res = await axios.request(options);

        set(() => ({ jobsData: res.data.data }));
        set(() => ({ isLoading: false }));
      } catch (error) {
        //In case API has met it's quota or there was an error, you will see an alert that you will be seeing stale data just to showcase App
        set({ isError: true });
        set(() => ({ jobsData: dummyData.data }));
        //console.log(error);
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
  setSavedJob: async (job) => {
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
      //console.log('job was already saved in favs');
    }
  },
  removeSavedJob: async (job) => {
    const savedJobs = useSavedJobsStore.getState().savedJobs;
    const newSavedJobs = savedJobs.filter((item) => job.job_id !== item.job_id);
    await storeJobData(JSON.stringify(newSavedJobs));
    set({ savedJobs: newSavedJobs });
  },
}));

export { useJobStore, useSavedJobsStore };

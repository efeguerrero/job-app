//Logic to store locally favorites jobs
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeJobData = async (value) => {
  try {
    await AsyncStorage.setItem('savedJobs', value);
  } catch (e) {
    console.log('error storing data locally', e);
  }
};

const getJobData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('savedJobs');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log('error getting local data', e);
    return 'error';
  }
};

export { storeJobData, getJobData };

import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from '@env';
const rapidApiKey = RAPID_API_KEY;

//Dummy Data Import
import dummyData from './dummyData.json';

const useFetch = (endpoint, query) => {
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // const res = await axios.request(options);
      //Working with dummy data first to aviot quota limit on api
      setData(dummyData.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert('There was an error fetching the data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;

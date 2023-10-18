import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './jobCard.style';

const JobCard = ({ job, handleNavigate }) => {
  const imageURL = job.employer_logo
    ? job.employer_logo
    : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg';

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={{ uri: imageURL }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.jobName}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.employer_name}</Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default JobCard;

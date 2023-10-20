import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

import styles from './footer.style';

//Constants imports
import { icons } from '../../../constants';

//Store Imports
import { useSavedJobsStore } from '../../../store/store';

const Footer = ({ url, handleSaveJob, jobId, handleRemoveJob }) => {
  const savedJobs = useSavedJobsStore((state) => state.savedJobs);
  //We verify if the job we are seeing is already saved in favorites
  const isJobSaved = savedJobs.find((jobItem) => jobItem.job_id === jobId)
    ? true
    : false;

  return (
    <View style={styles.container}>
      {isJobSaved ? (
        <TouchableOpacity
          style={styles.bookmarkBtnContainer}
          onPress={handleRemoveJob}
        >
          <Image
            source={icons.bookmarkFilled}
            resizeMode="cover"
            style={styles.bookmarkBtn}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.bookmarkBtnContainer}
          onPress={handleSaveJob}
        >
          <Image
            source={icons.bookmark}
            resizeMode="cover"
            style={styles.bookmarkBtn}
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Footer;

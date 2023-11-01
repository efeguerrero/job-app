import { useCallback, useEffect, useState } from 'react';
import { Stack } from 'expo-router/stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//Store Import
import { useSavedJobsStore } from '../store/store';

// Keep the splash screen visible while we fetch resources like fonts, API fetches,etc
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

const AppLayout = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const getSavedJobs = useSavedJobsStore((state) => state.getSavedJobs);

  useEffect(() => {
    const prepare = async () => {
      try {
        //Pre loading fonts
        await Font.loadAsync({
          DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
          DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
          DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
        });

        //Load savedJobs from userStorage
        await getSavedJobs();

        // Artificially delay for two seconds to avoid snappy loading.
        //await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.log('there was an error', error);
      } finally {
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      const hideRes = await SplashScreen.hideAsync();
      console.log('hideRes', hideRes);
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return <Stack onLayout={onLayoutRootView} />;
};

export default AppLayout;

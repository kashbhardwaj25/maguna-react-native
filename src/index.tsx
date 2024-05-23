import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppStack from './screens/AppStack';
import authStore from './store/authStore';
import AuthStack from './screens/AuthStack';
import { getAccessToken } from './utils/tokensHelper';

const App = (): React.JSX.Element => {
  const queryClient = new QueryClient();

  const [loading, setLoading] = useState(true);
  const { setIsLoggedIn, isLoggedIn } = authStore();

  useEffect(() => {
    getAccessToken().then(accessToken => {
      if (accessToken) {
        setIsLoggedIn(true);
      }

      setLoading(false);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Text>Loading...</Text>;

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <QueryClientProvider client={queryClient}>
        {isLoggedIn ? <AppStack /> : <AuthStack />}
      </QueryClientProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  customFontText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
});

export default App;

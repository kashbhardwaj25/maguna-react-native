import { SafeAreaView, StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppStack from './screens/AppStack';
import AuthStack from './screens/AuthStack';

const App = (): React.JSX.Element => {
  const queryClient = new QueryClient();

  const token = true;

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <QueryClientProvider client={queryClient}>
        {token ? <AppStack /> : <AuthStack />}
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

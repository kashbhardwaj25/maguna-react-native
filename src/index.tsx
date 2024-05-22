import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <QueryClientProvider client={queryClient}>
        <Text style={styles.customFontText}>Maguna</Text>
      </QueryClientProvider>
    </SafeAreaView>
  );
}

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

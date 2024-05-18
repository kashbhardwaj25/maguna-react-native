import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Text>Maguna</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;

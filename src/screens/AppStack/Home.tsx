import { SafeAreaView, Text } from 'react-native';

import { HomeScreenNavigationProp } from '../../types/navigationTypes';

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const Home = ({ navigation }: HomeScreenProps) => {
  console.log(navigation);

  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

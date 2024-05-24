import { Button, SafeAreaView, Text } from 'react-native';

import authStore from '../../store/authStore';
import { removeAccessToken } from '../../utils/tokensHelper';
import { HomeScreenNavigationProp } from '../../types/navigationTypes';

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const Home = ({ navigation }: HomeScreenProps) => {
  console.log(navigation);
  const { setIsLoggedIn } = authStore();

  const handleLogout = async () => {
    await removeAccessToken();
    setIsLoggedIn(false);
  };

  return (
    <SafeAreaView>
      <Text>Home</Text>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Button onPress={handleLogout as any} title="Logout" />
    </SafeAreaView>
  );
};

export default Home;

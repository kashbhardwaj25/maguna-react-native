import { SafeAreaView, Text } from 'react-native';

import { LoginScreenNavigationProp } from '../../types/navigationTypes';

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const Login = ({ navigation }: LoginScreenProps) => {
  console.log(navigation);

  return (
    <SafeAreaView>
      <Text>Login</Text>
    </SafeAreaView>
  );
};

export default Login;

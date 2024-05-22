import { Button, SafeAreaView } from 'react-native';

import { LoginScreenNavigationProp } from '../../types/navigationTypes';

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const Login = ({ navigation }: LoginScreenProps) => {
  return (
    <SafeAreaView>
      <Button
        title="New user? Sign up here."
        onPress={() => navigation.navigate('SignUp')}
      />
    </SafeAreaView>
  );
};

export default Login;

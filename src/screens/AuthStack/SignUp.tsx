import { SafeAreaView, Text } from 'react-native';

import { SignUpScreenNavigationProp } from '../../types/navigationTypes';

interface SignUpProps {
  navigation: SignUpScreenNavigationProp;
}

const SignUp = ({ navigation }: SignUpProps) => {
  console.log(navigation);

  return (
    <SafeAreaView>
      <Text>SignUp</Text>
    </SafeAreaView>
  );
};

export default SignUp;

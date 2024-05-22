import { Button, SafeAreaView } from 'react-native';

import { SignUpScreenNavigationProp } from '../../types/navigationTypes';

interface SignUpProps {
  navigation: SignUpScreenNavigationProp;
}

const SignUp = ({ navigation }: SignUpProps) => {
  return (
    <SafeAreaView>
      <Button
        title="Already have an account? Login here."
        onPress={() => navigation.navigate('SignUp')}
      />
    </SafeAreaView>
  );
};

export default SignUp;

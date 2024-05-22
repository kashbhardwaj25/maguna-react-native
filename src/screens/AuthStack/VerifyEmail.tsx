import { SafeAreaView, Text } from 'react-native';

import { VerifyEmailScreenNavigationProp } from '../../types/navigationTypes';

interface VerifyEmailProps {
  navigation: VerifyEmailScreenNavigationProp;
}

const VerifyEmail = ({ navigation }: VerifyEmailProps) => {
  console.log(navigation);

  return (
    <SafeAreaView>
      <Text>VerifyEmail</Text>
    </SafeAreaView>
  );
};

export default VerifyEmail;

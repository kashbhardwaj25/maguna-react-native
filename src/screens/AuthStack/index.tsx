import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './Login';
import SignUp from './SignUp';
import VerifyEmail from './VerifyEmail';
import { RootAuthStackParamList } from '../../types/navigationTypes';

const Stack = createStackNavigator<RootAuthStackParamList>();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerLeft: () => null }}
        />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;

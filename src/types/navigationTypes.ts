import { StackNavigationProp } from '@react-navigation/stack';

export type RootAppStackParamList = {
  Home: undefined;
};

export type RootAuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  VerifyEmail: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<
  RootAuthStackParamList,
  'Login'
>;

export type SignUpScreenNavigationProp = StackNavigationProp<
  RootAuthStackParamList,
  'SignUp'
>;

export type VerifyEmailScreenNavigationProp = StackNavigationProp<
  RootAuthStackParamList,
  'VerifyEmail'
>;

export type HomeScreenNavigationProp = StackNavigationProp<
  RootAppStackParamList,
  'Home'
>;

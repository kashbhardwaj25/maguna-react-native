import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { RootAppStackParamList } from '../../types/navigationTypes';

const Stack = createStackNavigator<RootAppStackParamList>();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

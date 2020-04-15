import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator
    screenOptions={{ headerStyle: { backgroundColor: '#ededed' } }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Books' }}
    />
  </Stack.Navigator>
);

export default Routes;

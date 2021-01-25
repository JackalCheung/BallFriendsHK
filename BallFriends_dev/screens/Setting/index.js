import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Setting from './setting';

const Stack = createStackNavigator();

export default function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={Setting}
      />
    </Stack.Navigator>
  );
}

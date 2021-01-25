import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Pairing from './pairing';

const Stack = createStackNavigator();

export default function PairingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pairing"
        component={Pairing}
      />
    </Stack.Navigator>
  );
}
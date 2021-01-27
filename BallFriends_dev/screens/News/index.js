import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import News from './news';

const Stack = createStackNavigator();

export default function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        component={News}
      />
    </Stack.Navigator>
  );
}

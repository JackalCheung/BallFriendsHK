import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Friendly from './friendly';

/*
const TopTab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <TopTab.Navigator lazy={true}>
      <TopTab.Screen name="Today" component={TodaySreen} />
      <TopTab.Screen name="Tomorrow" component={TomorrowSreen} />
    </TopTab.Navigator>
  );
}

function TodaySreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Today!</Text>
    </View>
  );
}

function TomorrowSreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tomorrow!</Text>
    </View>
  );
}
*/

const Stack = createStackNavigator();

export default function FriendlyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Friendly"
        component={Friendly}
        options={{
          headerStyle:
          {
            elevation: 0,
          }
        }}
      />
    </Stack.Navigator>
  );
}
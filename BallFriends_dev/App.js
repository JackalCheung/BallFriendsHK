import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LeagueStack from './screens/League';
import FriendlyStack from './screens/Friendly';
import PairingStack from './screens/Pairing';
import SettingStack from './screens/Setting';

const BottomTab = createBottomTabNavigator();

function BotTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="League"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <BottomTab.Screen
        name="League"
        component={LeagueStack}
        options={{
          tabBarLabel: 'League',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="scoreboard"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Friendly"
        component={FriendlyStack}
        options={{
          tabBarLabel: 'Friendly',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="soccer-field"
              color={color}
              size={size}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <BottomTab.Screen
        name="Pairing"
        component={PairingStack}
        options={{
          tabBarLabel: 'Pairing',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="whistle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingStack}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cog"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <BotTabs />
    </NavigationContainer>
  );
}

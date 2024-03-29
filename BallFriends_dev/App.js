import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LeagueStack from './screens/League';
import FriendlyStack from './screens/Friendly';
import PairingStack from './screens/Pairing';
import NewsStack from './screens/News';
import SettingStack from './screens/Setting';

import Fixture from './screens/Share/fixture';
import Standing from './screens/Share/standing';
import Theme from './screens/Styles/theme';

const BottomTab = createBottomTabNavigator();

function BotTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="League"
      tabBarOptions={{
        activeTintColor: Theme.primaryColor,
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
        name="News"
        component={NewsStack}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="newspaper-variant"
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

const Stack = createStackNavigator();

export default function App() {
  // const scheme = useColorScheme();

  return (
    
      <NavigationContainer theme={DefaultTheme}>
        <Stack.Navigator initialRouteName="BotTabs">
          <Stack.Screen name="BotTabs" component={BotTabs}
            options={{
              headerShown: false
            }} />
          <Stack.Screen name="Fixture" component={Fixture} />
          <Stack.Screen name="Standing" component={Standing}
            options={{
              headerStyle:
              {
                elevation: 0,
              }
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

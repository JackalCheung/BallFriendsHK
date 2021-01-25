import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import League from './league';

const Stack = createStackNavigator();

const MaterialCommunityIconsHeaderButton = (props) => (
  <HeaderButton
    IconComponent={MaterialCommunityIcons}
    iconSize={23}
    color="black"
    {...props}
  />
);

export default function LeagueStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BallFriendsHK"
        component={League}
        options={{
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={MaterialCommunityIconsHeaderButton}>
              <Item
                title="date"
                iconName="calendar-month"
                onPress={() => alert('Select date.')}
              />
              <Item
                title="notification"
                iconName="bell"
                onPress={() => console.log("Click")}
              />
            </HeaderButtons>
          )
        }}
      />
    </Stack.Navigator>
  );
}

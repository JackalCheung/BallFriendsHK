import * as React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Moment from 'moment';

import League from './league';

const MaterialCommunityIconsHeaderButton = (props) => (
  <HeaderButton
    IconComponent={MaterialCommunityIcons}
    iconSize={23}
    color="black"
    {...props}
  />
);

const Tab = createMaterialTopTabNavigator();

function MyTabs({ navigation }) {
  var date1 = new Date();
  date1.setDate(date1.getDate() - 1);
  var date2 = new Date();
  var date3 = new Date();
  date3.setDate(date3.getDate() + 1);
  return (
    <Tab.Navigator
      lazy
      initialRouteName={Moment(date2).format("YYYY-MM-DD")}
      tabBarOptions={{
        scrollEnabled: true
      }}>
      <Tab.Screen name={Moment(date1).format("YYYY-MM-DD")} children={() => <League date={date1} navigation={navigation} />} options={{ title: "Yesterday" }} />
      <Tab.Screen name={Moment(date2).format("YYYY-MM-DD")} children={() => <League date={date2} navigation={navigation} />} options={{ title: "Today" }} />
      <Tab.Screen name={Moment(date3).format("YYYY-MM-DD")} children={() => <League date={date3} navigation={navigation} />} options={{ title: "Tomorrow" }} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function LeagueStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BallFriendsHK"
        component={MyTabs}
        options={{
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={MaterialCommunityIconsHeaderButton}>
              <Item
                title="date"
                iconName="calendar-month"
                onPress={() => alert("Date selection in development.")}
              />
              <Item
                title="notification"
                iconName="bell"
                onPress={() => console.log("Click")}
              />
            </HeaderButtons>
          ),
          headerStyle:
          {
            elevation: 0,
          }
        }}
      />
    </Stack.Navigator>
  );
}

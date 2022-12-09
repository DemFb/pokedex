import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import {Favorites} from './Favorites';

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarBadge: 0, headerShown: false}}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{tabBarBadge: 1, headerShown: false}}
      />
    </Tab.Navigator>
  );
};

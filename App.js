/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Favorites} from './src/components/Favorites';
import {TabBar} from './src/components/TabBar';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {PokeDetail} from './src/components/Detail';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Launch"
            component={TabBar}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Favorites"
            component={Favorites}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PokeDetail"
            component={PokeDetail}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
/*=======
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
>>>>>>> searchBar*/
  );
};

export default App;

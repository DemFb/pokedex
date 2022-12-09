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
import {TabBar} from './src/components/TabBar';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PokeDetail} from './src/components/Detail';
import {PersistGate} from 'redux-persist/integration/react';

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
            name="PokeDetail"
            component={PokeDetail}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

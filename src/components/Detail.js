import React from 'react';
import {Text, View} from 'react-native';

export const PokeDetail = ({route}) => {
  console.log(route.params.pokeId);
  return (
    <View style={{flex: 1}}>
      <Text>
        {route.params.title}
        {route.params.pokeId}
      </Text>
    </View>
  );
};

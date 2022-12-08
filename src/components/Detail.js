import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getOne} from '../api/apiHelper';

export const PokeDetail = ({route}) => {
  const [pokemon, setPokemon] = useState();
  const getPokemon = useCallback(async () => {
    getOne(route.params.pokeId).then(response => {
      setPokemon(response.data);
      console.log(response.data);
    });
  }, [pokemon]);

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>
        {route.params.title}
        {route.params.pokeId}
      </Text>
    </View>
  );
};

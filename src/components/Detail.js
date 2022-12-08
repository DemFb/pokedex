import React, {useCallback, useEffect, useState} from 'react';
import { SafeAreaView, Text, View } from "react-native";
import {getOne} from '../api/apiHelper';

export const PokeDetail = ({route}) => {
  const [pokemon, setPokemon] = useState({});

  const getPokemon = useCallback(async () => {
    getOne(route.params.pokeId).then(response => {
      // let pokemonInfo = response.data;
      // setPokemon(response.data);
      let updatedValue = response.data;

      setPokemon(updatedValue);
    });
  }, [route.params.pokeId]);

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>
          {pokemon.name}
          {route.params.title}
          {route.params.pokeId}
        </Text>
      </View>
    </SafeAreaView>
  );
};

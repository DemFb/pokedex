import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getOne} from '../api/apiHelper';
import {useDispatch, useSelector} from 'react-redux';
import {actions as addToFavoriteAction} from '../redux/reducers/FavoriteListReducer';
import {useNavigation} from '@react-navigation/native';

export const PokeDetail = ({route}) => {
  const [pokemon, setPokemon] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getPokemon = useCallback(async () => {
    getOne(route.params.pokeId).then(response => {
      let updatedValue = response.data;
      setPokemon(updatedValue);
    });
  }, [route.params.pokeId]);

  useEffect(() => {
    getPokemon();
  }, []);

  const {favoritePokemonList} = useSelector(s => s.favoritePokemon);
  const addPokemon = useCallback(
    selectedPokemon => {
      const filterList = favoritePokemonList.filter(
        pok => pok.id === selectedPokemon.id,
      );
      if (filterList.length > 0) {
        Alert.alert('Ptit problème', 'le pokemon est déjà en favori');
      } else {
        Alert.alert('test', 'a été ajouter en favori');
        dispatch(addToFavoriteAction.addToFavorite(selectedPokemon));
        navigation.navigate('Favorites');
      }
    },
    [dispatch],
  );

  if (!pokemon) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>{pokemon.name}</Text>
        <TouchableOpacity onPress={() => addPokemon(pokemon)}>
          <Text>CLIQUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

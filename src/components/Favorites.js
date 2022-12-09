import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Card} from './Card';
import {actions as deletToFavoriteAction} from '../redux/reducers/FavoriteListReducer';

//import AsyncStorage from '@react-native-async-storage/async-storage';

export const Favorites = ({navigation}) => {
  const {favoritePokemonList} = useSelector(s => s.favoritePokemon);
  const dispatch = useDispatch();

  /*  const deletToFavorite = useCallback(
    selectedPokemon => {
      const test = favoritePokemonList.filter(
        pok => pok.id === selectedPokemon.id,
      );
      dispatch(deletToFavoriteAction.deletToFavorite(test[0].id));
    },
    [dispatch, favoritePokemonList],
  );*/

  console.log(favoritePokemonList);
  const renderItem = ({item}) => {
    return (
      <View>
        <Card item={item} navigation={navigation} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          width: '100%',
          padding: 5,
          flexDirection: 'column',
          alignItems: 'center',
        }}
        numColumns={2}
        data={favoritePokemonList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.21)',
  },
});

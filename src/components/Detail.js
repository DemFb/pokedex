import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {getOne} from '../api/apiHelper';

export const PokeDetail = ({route}) => {
  const [pokemon, setPokemon] = useState();

  const getPokemon = useCallback(async () => {
    getOne(route.params.pokeId).then(response => {
      let updatedValue = response.data;
      setPokemon(updatedValue);
    });
  }, [route.params.pokeId]);

  useEffect(() => {
    getPokemon();
  }, []);

  if (!pokemon) {
    return null;
  }

  const renderItem = () => {
    console.log(pokemon.apiPreEvolution);
  };

  renderItem();

  return (
    <ScrollView>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <View style={styles.cardDetailSeparator}>
            <TouchableOpacity>
              <Text style={styles.cardDetailTitle}>{pokemon.name}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Image source={{uri: pokemon.image}} style={styles.pokemonImage} />
            <Text>
              {pokemon.id} : {pokemon.name}
            </Text>
            <View style={styles.evolutionContainer}>
              <Image
                source={{uri: pokemon.apiTypes[0].image}}
                style={styles.pokemonTypeImage}
              />
              <Image
                source={{uri: pokemon.apiTypes[1].image}}
                style={styles.pokemonTypeImage}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.cardDetailSeparator}>
            <Text style={styles.cardDetailTitle}>Stats</Text>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statsItems}>
              <Text>HP : {pokemon.stats.HP}</Text>
              <Text>ATK : {pokemon.stats.attack}</Text>
              <Text>DEF : {pokemon.stats.defense}</Text>
            </View>
            <View style={styles.statsItems}>
              <Text>A.SP : {pokemon.stats.special_attack}</Text>
              <Text>D.SP : {pokemon.stats.special_defense}</Text>
              <Text>SPD : {pokemon.stats.speed}</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.cardDetailSeparator}>
            <Text style={styles.cardDetailTitle}>Evolution</Text>
          </View>
          <View style={styles.evolutionContainer}>
            <View style={styles.evolutionItem}>
              <Image
                source={{uri: pokemon.image}}
                style={styles.pokemonImage}
              />
              <Text>test</Text>
            </View>
            <View style={styles.evolutionItem}>
              <Image
                source={{uri: pokemon.image}}
                style={styles.pokemonImage}
              />
              <Text>
                {pokemon.id} : {pokemon.name}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.cardDetailSeparator}>
            <Text style={styles.cardDetailTitle}>Resistances</Text>
          </View>
          <View style={styles.resistanceContainer} numColumns={2}>
            <View>
              {pokemon.apiResistances.map(item => {
                return (
                  <View style={styles.resistanceItem}>
                    <Text>{item.name}</Text>
                    <Text>x {item.damage_multiplier}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.21)',
  },
  cardDetailSeparator: {
    backgroundColor: '#A42323',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDetailTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  pokemonImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  pokemonTypeImage: {
    width: 60,
    height: 60,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  typeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statsItems: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  evolutionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  evolutionItem: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 20,
  },
  resistanceContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
    width: ' 100%',
  },
  resistanceItem: {
    display: 'flex',
    paddingBottom: 20,
  },
});

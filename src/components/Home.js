import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {fetchData} from '../api/apiHelper';
import {Card} from './Card';
import { useDispatch } from "react-redux";
import {actions as listAction} from '../redux/reducers/PokemonListReducer';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData().then(response => {
      setData(response.data);
      dispatch(listAction.getPokemons(response.data));
    });
  }, [data, dispatch]);
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
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.21)',
  },
});

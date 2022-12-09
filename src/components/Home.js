import React, { useEffect, useMemo, useState } from "react";
import {FlatList, StyleSheet, View} from 'react-native';
import {fetchData} from '../api/apiHelper';
import {Card} from './Card';
import {useDispatch} from 'react-redux';
import {actions as listAction} from '../redux/reducers/PokemonListReducer';
import SearchBar from 'react-native-dynamic-search-bar';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData().then(response => {
      setData(response.data);
      dispatch(listAction.getPokemons(response.data));
    });
  }, [data, dispatch]);

  const datafilter = useMemo(() => {
    return data
      .filter(function (item) {
        return item.name.includes(text);
      })
      .map(function ({id, name, image}) {
        return {id, name, image};
      });
  }, [data, text]);

  const renderItem = ({item}) => {
    return (
      <View>
        <Card item={item} navigation={navigation} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar
        style={{marginTop: 50}}
        placeholder="Search here"
        onPress={() => clearImmediate}
        onChangeText={newText => setText(newText)}
        value={text}
      />
      <FlatList
        contentContainerStyle={{
          width: '100%',
          padding: 5,
          flexDirection: 'column',
          alignItems: 'center',
        }}
        numColumns={2}
        data={datafilter}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.21)',
  },
});

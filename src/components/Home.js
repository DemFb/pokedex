import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {fetchData} from '../api/apiHelper';
import {Card} from './Card';
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(response => {
      setData(response.data);
    });
  }, []);
  const renderItem = ({item}) => {
    return (
      <View>
        <Card item={item} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Liste des pokémons </Text>
      <FlatList
        style={styles.cardList}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  cardList: {
    flex: 1,
    width: '100%',
    flexFlow: 'row wrap',
    backgroundColor: 'aliceblue',
  },
});

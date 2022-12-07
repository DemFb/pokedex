import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.title}> Sign up </Text>
      <View>
        <Text>Page d'accueil</Text>
      </View>
      <FlatList
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
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
    backgroundColor: 'red',
  },
});

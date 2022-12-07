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

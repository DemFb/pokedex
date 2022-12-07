import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Home = () => {
  const [data, setData] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Sign up </Text>
      <View>
        <Text>Page d'accueil</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  sectionContainer: {
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
});

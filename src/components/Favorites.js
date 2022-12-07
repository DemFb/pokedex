import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

export const Favorites = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Sign up </Text>
      <View>
        <Text>Page favorite</Text>
      </View>
    </SafeAreaView>
  );
};

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

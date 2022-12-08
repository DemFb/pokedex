import SearchBar from 'react-native-dynamic-search-bar';
import React, {useEffect, useState} from 'react';
import {fetchData} from '../api/apiHelper';

export const BarDeRecherche = props => {
  const [searchQuery, setSearchQuery] = useState();
  const [dataFilter, setDatafilter] = useState([item]);

  useEffect(() => {
    fetchData().then(response => {
      setDatafilter(response.data);
    });
  }, []);

  return (
    <SearchBar
      style={{marginTop: 50}}
      placeholder="Search here"
      onPress={() => clearImmediate}
      onChangeText={setSearchQuery}
    />
  );
};

import {createSlice} from '@reduxjs/toolkit';

const dataList = [];

const slice = createSlice({
  extraReducers: undefined,
  initialState: {
    pokemonArray: dataList,
  },
  name: 'pokemonList',
  reducers: {
    getPokemons: (state, action) => {
      state.pokemonArray.push(action.payload);
    },
  },
});

const {reducer, actions} = slice;

export {reducer, actions};

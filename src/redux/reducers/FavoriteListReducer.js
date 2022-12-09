import {createSlice} from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'favoritePokemon',
  initialState: {
    favoritePokemonList: [],
  },
  reducers: {
    addToFavorite(state, action) {
      state.favoritePokemonList = [
        ...state.favoritePokemonList,
        action.payload,
      ];
    },
  },
});

const {reducer, actions} = listSlice;

export {reducer, actions};

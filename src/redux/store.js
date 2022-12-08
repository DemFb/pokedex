import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducer as pokemonList} from './reducers/PokemonListReducer';

const rootReducer = combineReducers({
  pokemonList: pokemonList,
});

const store = configureStore({
  reducer: rootReducer,
});

export {store};

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducer as pokemonList} from './reducers/PokemonListReducer';
import {reducer as favoritePokemon} from './reducers/FavoriteListReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist';

const rootReducer = combineReducers({
  pokemonList: pokemonList,
  favoritePokemon: favoritePokemon,
});

/*
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
*/

/*
const persistedReducer = persistReducer(persistConfig, rootReducer);
*/

const store = configureStore({
  reducer: rootReducer,
  /*  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    }),*/
});

// const persistor = persistStore(store);

export {store};

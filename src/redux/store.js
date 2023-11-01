import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productsSlice';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  // products: productsReducer,
  // recommended: recommendedReducer,
  // cart: cartReducer,
  // user: userReducer,
  // orders: ordersReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user'], //esto sirve para saber que guardar en el local storage osea en este caso carrito y usuario cuando se logee
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

// store.js
import { configureStore } from '@reduxjs/toolkit';
import brandProductsReducer from './reducers/brandProductsSlice';

const store = configureStore({
  reducer: {
    brandProducts: brandProductsReducer,
  },
});

export default store;

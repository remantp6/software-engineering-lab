// brandProductsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const brandProductsSlice = createSlice({
  name: 'brandProducts',
  initialState: {},
  reducers: {
    addProduct: (state, action) => {
      const { brand, productName } = action.payload;
      if (!state[brand]) {
        state[brand] = [];
      }
      if (!state[brand].includes(productName)) {
        state[brand].push(productName);
      }
    },
    deleteProduct: (state, action) => {
      const { brand, productIndex } = action.payload;
      if (state[brand]) {
        state[brand].splice(productIndex, 1);
      }
    },
  },
});

export const { addProduct, deleteProduct } = brandProductsSlice.actions;
export default brandProductsSlice.reducer;

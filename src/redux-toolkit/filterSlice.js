/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPrice: {
    minPrice: 0,
    maxPrice: 0,
  },
  selectedCity: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelectCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    setSelectPrice: (state, action) => {
      state.selectedPrice = action.payload;
    },
  },
});
export const { setSelectCity, setSelectPrice } = filterSlice.actions;
export default filterSlice.reducer;

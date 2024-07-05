import { createSlice } from '@reduxjs/toolkit';
import { deleteProduct, dayInfo } from './day-operations';

const initialState = {
  id: null,
  eatenProducts: [],
  date: '',
  daySummary: {},
};

export const daySlice = createSlice({
  name: 'day',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(postProduct.fulfilled, (state, action) => {
      //   state.eatenProducts = action.payload.day.eatenProducts;
      //   state.id = action.payload.day.id;
      //   state.date = action.payload.day.date;
      //   state.daySummary = action.payload.day.daySummary;
      // })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.daySummary = action.payload.newDaySummary;
      })
      .addCase(dayInfo.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.eatenProducts = action.payload.eatenProducts;
        state.date = action.payload.date;
        state.daySummary = action.payload.daySummary;
      });
  },
});

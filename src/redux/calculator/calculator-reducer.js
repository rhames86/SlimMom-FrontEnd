import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/auth-operations';

const initialState = {
  weight: undefined,
  height: undefined,
  age: undefined,
  desiredWeight: undefined,
  bloodType: undefined,
};

export const calcSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    calcData: (state, { payload }) => {
      state.weight = payload.weight;
      state.height = payload.height;
      state.age = payload.age;
      state.desiredWeight = payload.desiredWeight;
      state.bloodType = payload.bloodType;
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, (state, _) => {
      state.weight = undefined;
      state.height = undefined;
      state.age = undefined;
      state.desiredWeight = undefined;
      state.bloodType = undefined;
    });
  },
});

export const { calcData } = calcSlice.actions;

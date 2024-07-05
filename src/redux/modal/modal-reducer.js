import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: { toggleModal: (state, action) => (state = action.payload) },
});

export const { toggleModal } = modalSlice.actions;

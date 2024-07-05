import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'light', check: false },
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload;
    },
    changeCheck: (state, { payload }) => {
      state.check = payload;
    },
  },
});

export const { changeTheme, changeCheck } = themeSlice.actions;

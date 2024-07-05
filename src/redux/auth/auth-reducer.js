import { createSlice } from '@reduxjs/toolkit';
import { ua, en, es } from 'localization';
import {
  logIn,
  logOut,
  refreshUser,
  getUser,
  dailyRate,
  dailyRateId,
} from './auth-operations';

const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  todaySummary: {},
  user: { userData: { dailyRate: null, notAllowedProducts: [] } },
  isLoggedIn: false,
  isRefreshing: false,
  lang: en,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    languageSelection: (state, action) => {
      switch (action.payload) {
        case 'ua':
          state.lang = ua;
          break;
        case 'en':
          state.lang = en;
          break;
        case 'es':
          state.lang = es;
          break;
        default:
          state.lang = en;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      state.todaySummary = action.payload.todaySummary;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      state.todaySummary = {};
      state.user = { userData: { dailyRate: null, notAllowedProducts: [] } };
      state.isLoggedIn = false;
    });
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.newAccessToken;
      state.refreshToken = action.payload.newRefreshToken;
      state.sid = action.payload.sid;
      state.isLoggedIn = true;
    });
    builder.addCase(refreshUser.rejected, state => {
      state.isRefreshing = false;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(dailyRate.fulfilled, (state, action) => {
      state.user.userData.dailyRate = action.payload.dailyRate;
      state.user.userData.notAllowedProducts =
        action.payload.notAllowedProducts;
    });
    builder.addCase(dailyRateId.fulfilled, (state, action) => {
      state.user.userData.dailyRate = action.payload.dailyRate;
      state.user.userData.notAllowedProducts =
        action.payload.notAllowedProducts;
      state.user.userData.summaries = action.payload.summaries;
      state.user.userData.id = action.payload.id;
    });
  },
});

export const { languageSelection } = authSlice.actions;

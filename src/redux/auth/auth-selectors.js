import { createSelector } from '@reduxjs/toolkit';

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getIsRefreshing = state => state.auth.isRefreshing;

export const getUser = state => state.auth.user;
export const getUserData = state => state.auth.user.userData;
export const getDailyRate = state => state.auth.user.userData.dailyRate;
export const getNotAllowedProducts = state =>
  state.auth.user.userData.notAllowedProducts;

export const getDaily = createSelector(
  [getDailyRate, getNotAllowedProducts],
  (dailyRate, notAllowedProducts) => {
    return { dailyRate, notAllowedProducts };
  }
);

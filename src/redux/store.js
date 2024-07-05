import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authSlice } from './auth/auth-reducer';
import { daySlice } from './day/day-reducer';
import { modalSlice } from './modal/modal-reducer';
import storage from 'redux-persist/lib/storage';
import { calcSlice } from './calculator/calculator-reducer';
import { themeSlice } from './theme/theme-reducer';

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['refreshToken', 'sid', 'accessToken', 'lang'],
};

// Persisting token field from auth slice to localstorage
const calcPersistConfig = {
  key: 'calc',
  storage,
};

// Persisting token field from auth slice to localstorage
const themePersistConfig = {
  key: 'theme',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    day: daySlice.reducer,
    calc: persistReducer(calcPersistConfig, calcSlice.reducer),
    isModalOpen: modalSlice.reducer,
    theme: persistReducer(themePersistConfig, themeSlice.reducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken, clearToken } from 'config';
import { toast } from 'react-toastify';

export const register = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const user = await instance.post('/auth/register', body);
      // toast(`Welcome ${user.data.username}`);
      return user.data;
    } catch (error) {
      toast.warn(
        error.response.status === 409
          ? 'Provided email already exists'
          : 'Bad request'
      );
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const user = await instance.post('/auth/login', body);
      setToken(user.data.accessToken);
      toast.success(`Hello, ${user.data.user.username}`);
      return user.data;
    } catch (error) {
      toast.warn(
        error.response.status === 403
          ? "Email doesn'\t exist or password is wrong"
          : 'Bad request'
      );
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await instance.post('/auth/logout');
      clearToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.refreshToken;
    const sid = { sid: state.auth.sid };
    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setToken(persistedToken);
      const refresh = await instance.post('/auth/refresh', sid);
      setToken(refresh.data.newAccessToken);
      // const user = await instance.get('/user');
      // const payload = { refresh, user };
      return refresh.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk('auth/user', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.accessToken;

  if (persistedToken === null) {
    // If there is no token, exit without performing any request
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    // If there is a token, add it to the HTTP header and perform the request
    setToken(persistedToken);
    const user = await instance.get('/user');
    return user.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const dailyRate = createAsyncThunk(
  'auth/dailyRate',
  async (body, thunkAPI) => {
    try {
      const dailyrate = await instance.post('/daily-rate', body);
      return dailyrate.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const dailyRateId = createAsyncThunk(
  'auth/dailyRateId',

  async (body, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = state.auth.user.id;

    try {
      const dailyrate = await instance.post(`/daily-rate/${userId}`, body);
      return dailyrate.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

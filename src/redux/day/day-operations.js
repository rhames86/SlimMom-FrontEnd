import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'config';

export const postProduct = createAsyncThunk(
  'day/postProduct',
  async (body, { rejectWithValue }) => {
    try {
      const product = await instance.post('/day', body);
      return product.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'day/deleteProduct',
  async (body, { rejectWithValue }) => {
    try {
      const product = await instance.delete('/day', { data: body });
      return product.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const dayInfo = createAsyncThunk(
  'day/info',
  async (body, { rejectWithValue }) => {
    try {
      const dayInfo = await instance.post('/day/info', body);
      if (dayInfo.data.id) {
        return dayInfo.data;
      }
      const info = {
        date: body.date,
        daySummary: {
          date: body.date,
          kcalLeft: dayInfo.data.kcalLeft,
          kcalConsumed: dayInfo.data.kcalConsumed,
          dailyRate: dayInfo.data.dailyRate,
          percentsOfDailyRate: dayInfo.data.percentsOfDailyRate,
        },
        eatenProducts: [],
        id: null,
      };
      return info;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

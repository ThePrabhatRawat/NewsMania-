import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../features/newsSlice/newsSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

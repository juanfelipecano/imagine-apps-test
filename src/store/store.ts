import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './slices/coursesSlice';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

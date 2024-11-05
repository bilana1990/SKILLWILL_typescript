import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// RootState და AppDispatch ტიპები
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
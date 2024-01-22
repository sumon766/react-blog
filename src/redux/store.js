import { configureStore } from '@reduxjs/toolkit';
import userReducer from './actions/userSlice';
import postReducer from './actions/postSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});

export default store;

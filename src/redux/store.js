import { configureStore } from '@reduxjs/toolkit';
import userReducer from './actions/userSlice';
import postReducer from './actions/postSlice';
import photoReducer from './actions/photoSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    photo: photoReducer
  },
});

export default store;

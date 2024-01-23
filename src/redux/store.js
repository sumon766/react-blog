import { configureStore } from '@reduxjs/toolkit';
import userReducer from './actions/userSlice';
import postReducer from './actions/postSlice';
import photoReducer from './actions/photoSlice';
import todoReducer from './actions/todoSlice';
import albumReducer from './actions/albumSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    photo: photoReducer,
    todo: todoReducer,
    album: albumReducer,
  },
});

export default store;

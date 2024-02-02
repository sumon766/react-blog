import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  loading: false,
  posts: [],
  error: '',
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } 
  catch (error) {
    throw error.response.data;
  }
});

export const createPost = createAsyncThunk('posts/createposts', async (newPost) => {
  try {
    const response = await axios.post(apiUrl, newPost);
    return response.data;
  }
  catch (error) {
    throw error.response.data;
  }
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = '';
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });

    builder.addCase(createPost.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts.push = action.payload;
      state.error = '';
    });

    builder.addCase(createPost/rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default postSlice.reducer;

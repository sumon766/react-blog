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
  } catch (error) {
    throw error.response.data;
  }
});

export const createPost = createAsyncThunk('posts/createpost', async (newPost) => {
  try {
    const response = await axios.post(apiUrl, newPost);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

export const deletePost = createAsyncThunk('posts/deletePost', async (postId) => {
  try {
    const response = await axios.delete(`${apiUrl}/${postId}`);
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
      state.posts = state.posts.map((post) => (
        post.id === action.payload.id ? action.payload : post
      ));
      state.error = '';
      state.successfulSubmission = true;

      state.newPost = {
        userId: 1,
        title: '',
        body: '',
      };
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.successfullSubmission = false;
    });

    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = state.posts.filter((post) => (
        post.id === action.payload
      ));
      state.error = ''
    });
    builder.addCase(deletePost.rejected, (state) => {
      state.loading = false;
      state.error = action.payload
    });
  },
});

export default postSlice.reducer;

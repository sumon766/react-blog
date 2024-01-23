import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/albums';

const initialState = {
  loading: false,
  albums: [],
  error: '',
};

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const albumSlice = createSlice({
  name: 'album',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.loading = false;
      state.albums = action.payload;
      state.error = '';
    });

    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.loading = false;
      state.albums = [];
      state.error = action.payload;
    });
  },
});

export default albumSlice.reducer;

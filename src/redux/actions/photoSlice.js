import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

const initialState = {
    loading: false,
    photos: [],
    error: ''
}

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
});

const photoSlice = createSlice({
    name: 'photo',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPhotos.pending, state => {
            state.loading = true
        });

        builder.addCase(fetchPhotos.fulfilled, (state, action) => {
            state.loading = false;
            state.photos = action.payload;
            state.error = ''
        });

        builder.addCase(fetchPhotos.rejected, (state, action) => {
            state.loading = false;
            state.photos = [];
            state.error = action.payload
        });
    }
});

export default photoSlice.reducer;
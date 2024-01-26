import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = 'https://jsonplaceholder.typicode.com/comments';

const initialState = {
    loading: false,
    comments: [],
    error: ''
}

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
    try {
        const response = await axios.get(apiURL);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
});

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.loading = false;
            state.comments = action.payload;
            state.error = '';
        })

        builder.addCase(fetchComments.rejected, (state, action) => {
            state.loading = false;
            state.comments = [];
            state.error = action.payload;
        })
    }
});

export default commentSlice.reducer;
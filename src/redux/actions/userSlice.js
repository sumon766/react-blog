import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    users: [],
    error: '',
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
            headers: {
                'Cache-Control': 'no-cache',
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});



const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.payload;
        });
    }
});

export default userSlice.reducer;

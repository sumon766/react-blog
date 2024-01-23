import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    todos: [],
    error: ''
}

export const fetchTodos = () => { 
    
}

const todoSlice = createSlice({
    name: todo,
    initialState,
    extraReducers: builder => {

    }
});
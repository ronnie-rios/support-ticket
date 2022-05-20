import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//async thunk, to user async data from redux toolkit
//register new user
export const register = createAsyncThunk(
    'auth/register', 
    async (user, thunkApi) => {
    console.log(user)
})

export const login = createAsyncThunk(
    'auth/login', 
    async (user, thunkApi) => {
    console.log(user)
})

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //how to change state?
    }
})

export default authSlice.reducer
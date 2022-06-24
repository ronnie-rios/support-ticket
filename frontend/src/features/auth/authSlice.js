import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

//get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    //set initial state to either be a user from local storage or not logged in, null
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//async thunk, to user async data from redux toolkit
//register new user; gets imported into register component
export const register = createAsyncThunk(
    'auth/register', 
    async (user, thunkApi) => {
    try {
        return await authService.register(user)
    } catch (error) {
        //get msg from backend
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        //check where error is in BE, use thinkApi method to reject w/ msg
        return thunkApi.rejectWithValue(message)
    }
})
//login
export const login = createAsyncThunk('auth/login', 
    async (user, thunkApi) => {
    try {
        return await authService.register(user)
    } catch (error) {
        //get msg from backend
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        //check where error is in BE, use thinkApi method to reject w/ msg
        return thunkApi.rejectWithValue(message)
    }
})
//logout
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        //resetting the state
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    //
    extraReducers: (builder) => {
       //in redux, there is pending, fufilled etc.
       //builder has its own methods, .addCase and checks the register func 
        builder
            .addCase(register.pending, (state) => {
                //when its pending, going to set it to loading
                state.isLoading = true
            })
            //when the promise is fulfilled, grab the state and action
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                //sets the user state to the request payload
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                //set msg from rejected block in register func from that rejected value from redux
                state.message = action.payload
                //sets the user state to null because bad req
                state.user = null
            })
            .addCase(login.pending, (state) => {
                //when its pending, going to set it to loading
                state.isLoading = true
            })
            //when the promise is fulfilled, grab the state and action
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                //sets the user state to the request payload
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                //set msg from rejected block in login func from that rejected value from redux
                state.message = action.payload
                //sets the user state to null because bad req
                state.user = null
            })
            //when logout fulfilled resets the state for user null
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }
})
//export the rest to initial state from line38
export const { reset } = authSlice.actions
export default authSlice.reducer
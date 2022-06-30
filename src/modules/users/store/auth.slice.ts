import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: any = {
    isLoading: false,
    error: '',
}

export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async (payload, { rejectWithValue, dispatch }) => {

    }
)

export const appSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        loginReducer: (state, payload) => {

        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchLogin.pending, (state, action) => {

        })
    }
})

export const { loginReducer } = appSlice.actions

export default appSlice.reducer
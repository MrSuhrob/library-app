import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: any = {
    isLoading: false,
    error: '',
}

export const fetchLogin = createAsyncThunk(
    'login/fetchLogin',
    async (payload, { rejectWithValue, dispatch }) => {

    }
)

export const loginSlice = createSlice({
    name: 'login',
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

export const { loginReducer } = loginSlice.actions

export default loginSlice.reducer
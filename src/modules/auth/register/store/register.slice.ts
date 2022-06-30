import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: any = {
    isLoading: false,
    error: '',
}

export const fetchRegister = createAsyncThunk(
    'register/fetchRegister',
    async (payload, { rejectWithValue, dispatch }) => {

    }
)

export const registerSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        registerReducer: (state, payload) => {

        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchRegister.pending, (state, action) => {

        })
    }
})

export const { registerReducer } = registerSlice.actions

export default registerSlice.reducer
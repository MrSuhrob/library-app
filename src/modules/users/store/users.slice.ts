import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: any = {
    isLoading: false,
    error: '',
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (payload, { rejectWithValue, dispatch }) => {

    }
)

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

        createUserReducer: (state, payload) => {

        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {

        })
    }
})

export const { createUserReducer } = usersSlice.actions

export default usersSlice.reducer
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: any = {
    isLoading: false,
    error: '',
}

export const fetchDocuments = createAsyncThunk(
    'documents/fetchDocuments',
    async (payload, { rejectWithValue, dispatch }) => {

    }
)

export const documentSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {
        setDocumentReducer: (state, payload) => {

        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchDocuments.pending, (state, action) => {

        })
    }
})

export const { setDocumentReducer } = documentSlice.actions

export default documentSlice.reducer
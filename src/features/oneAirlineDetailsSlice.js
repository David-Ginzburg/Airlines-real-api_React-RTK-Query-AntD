import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../API'

export const fetchAirlinesDetails = createAsyncThunk(
    'airlineDetails/fetchAll',
    async () => {
        const response = await API.getAllAirlinesDetails()
        return response
    }
)

export const allAirlinesDetailsSlice = createSlice({
    name: 'airlinesDetails',
    initialState: {
        data: [],
        loading: false
    },
    reducers: {

    },
    extraReducers: {
        [fetchAirlinesDetails.loading]: (state) => {
            state.loading = true
        },
        [fetchAirlinesDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload
        },
        [fetchAirlinesDetails.rejected]: (state) => {
            state.loading = false
        }
    }
})

export default allAirlinesDetailsSlice.reducer
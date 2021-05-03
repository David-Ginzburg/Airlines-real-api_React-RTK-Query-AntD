import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../API'

export const fetchAllAirlinesDetails = createAsyncThunk(
    'allAirlinesDetails/fetchAll',
    async () => {
        const response = await API.getAllAirlinesDetails()
        return response
    }
)

export const allAirlinesDetailsSlice = createSlice({
    name: 'allAirlinesDetails',
    initialState: {
        data: [],
        loading: false
    },
    reducers: {
        clearData: (state) => {
            state.data = []
        }
    },
    extraReducers: {
        [fetchAllAirlinesDetails.loading]: (state) => {
            state.loading = true
        },
        [fetchAllAirlinesDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            const numberedDate = payload.map(item => {
                item.established ? item.established = Number(item.established) : item.established = 0
                return item
            })
            state.data = numberedDate
        },
        [fetchAllAirlinesDetails.rejected]: (state) => {
            state.loading = false
        }
    }
})

export const { clearData } = allAirlinesDetailsSlice.actions

export default allAirlinesDetailsSlice.reducer
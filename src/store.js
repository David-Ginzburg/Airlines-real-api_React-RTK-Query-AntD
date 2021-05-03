import { configureStore } from '@reduxjs/toolkit'

import allAirlinesDetailsSlice from './features/allAirlinesDetailsSlice'

export default configureStore({
    reducer: {
        allAirlinesDetails: allAirlinesDetailsSlice
    }
})
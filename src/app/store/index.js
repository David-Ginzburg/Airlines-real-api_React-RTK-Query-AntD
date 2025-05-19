import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { generalApi } from '../shared/api'

export const store = configureStore({
    reducer: {
        [generalApi.reducerPath]: generalApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(generalApi.middleware),
})

setupListeners(store.dispatch)

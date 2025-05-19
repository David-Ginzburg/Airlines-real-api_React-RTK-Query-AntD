import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const generalApi = createApi({
  reducerPath: 'generalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.instantwebtools.net/v1' }),
  tagTypes: ['Airlines', 'Passengers'],
  endpoints: (builder) => ({
    // Passenger endpoints removed
  }),
  
})

export const {
  // Passenger hooks removed
} = generalApi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const generalApi = createApi({
  reducerPath: 'generalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.instantwebtools.net/v1' }),
  tagTypes: ['Airlines', 'Passengers'],
  endpoints: (builder) => ({
    getAllAirlines: builder.query({
      query: () => `/airlines`,
      providesTags: (result, error, data) => [{ type: 'Airlines' }],
      transformResponse: (response) => response,
    }),
    createAirline: builder.mutation({
      query(data) {
        return {
          url: `airlines`,
          method: 'POST',
          body: data
        }
      },
      invalidatesTags: (result, error, data) => [
        { type: 'Airlines' },
      ],
    }),
    getAllPassengers: builder.query({
      query: (data) => `/passenger?page=${data.current}&size=${data.pageSize}`,
      providesTags: (result, error, data) => [{ type: 'Passengers', data }],
      transformResponse: (response) => response,
    }),
    deletePassenger: builder.mutation({
      query(id) {
        return {
          url: `passenger/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, data) => [
        { type: 'Passengers', data },
      ],
    }),
    createPassenger: builder.mutation({
      query(data) {
        return {
          url: `passenger`,
          method: 'POST',
          body: data
        }
      },
      invalidatesTags: (result, error, data) => [
        { type: 'Passengers', data },
      ],
    }),
    editPassenger: builder.mutation({
      query({id, body}) {
        return {
          url: `passenger/${id}`,
          method: 'PUT',
          body
        }
      },
      invalidatesTags: (result, error, data) => [
        { type: 'Passengers', data },
      ],
    }),
  }),
  
})

export const {
  useGetAllAirlinesQuery,
  useCreateAirlineMutation,
  useGetAllPassengersQuery,
  useDeletePassengerMutation,
  useCreatePassengerMutation,
  useEditPassengerMutation
} = generalApi
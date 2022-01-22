import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const generalApi = createApi({
  reducerPath: 'generalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.instantwebtools.net/v1' }),
  endpoints: (builder) => ({
    getAllAirlines: builder.query({
      query: () => `/airlines`,
      transformResponse: (response) => response,
    }),
    getAllPassengers: builder.query({
      query: (data) => `/passenger?page=${data.current}&size=${data.pageSize}`,
      transformResponse: (response) => response,
    }),
    deletePassenger: builder.mutation({
      query(id) {
        return {
          url: `passenger/${id}`,
          method: 'DELETE',
        }
      },
      // Invalidates the tag for this Post `id`, as well as the `PARTIAL-LIST` tag,
      // causing the `listPosts` query to re-fetch if a component is subscribed to the query.
      // invalidatesTags: (result, error, id) => [
      //   { type: 'Posts', id },
      //   { type: 'Posts', id: 'PARTIAL-LIST' },
      // ],
    }),
  }),
  
})

export const { useGetAllAirlinesQuery, useGetAllPassengersQuery, useDeletePassengerMutation } = generalApi
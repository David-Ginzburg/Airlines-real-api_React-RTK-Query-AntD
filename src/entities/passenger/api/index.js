import { generalApi } from '../../../shared/api';

export const passengerApi = generalApi.injectEndpoints({
  endpoints: (builder) => ({
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
      invalidatesTags: (result, error, data) => [{ type: 'Passengers', data }],
    }),
    createPassenger: builder.mutation({
      query(data) {
        return {
          url: `passenger`,
          method: 'POST',
          body: data
        }
      },
      invalidatesTags: (result, error, data) => [{ type: 'Passengers', data }],
    }),
    editPassenger: builder.mutation({
      query({id, body}) {
        return {
          url: `passenger/${id}`,
          method: 'PUT',
          body
        }
      },
      invalidatesTags: (result, error, data) => [{ type: 'Passengers', data }],
    }),
  }),
});

export const {
  useGetAllPassengersQuery,
  useDeletePassengerMutation,
  useCreatePassengerMutation,
  useEditPassengerMutation,
} = passengerApi;

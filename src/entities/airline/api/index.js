import { generalApi } from '../../../shared/api';

export const airlineApi = generalApi.injectEndpoints({
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
  }),
});

export const {
  useGetAllAirlinesQuery,
  useCreateAirlineMutation,
} = airlineApi;

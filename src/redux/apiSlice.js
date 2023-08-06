import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const launchesApi = createApi({
  reducerPath: "launchesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v5",
  }),

  endpoints: (builder) => ({
    getLaunches: builder.query({
      query: ({ sort, page, limit }) => ({
        url: `/launches/query`,
        method: "POST",
        body: {
          query: {
            date_utc: {
              $gte: "2015-01-01T00:00:00.000Z",
              $lte: "2020-01-01T00:00:00.000Z",
            },
          },
          options: {
            sort: {
              date_utc: sort,
            },
            page,
            limit,
          },
        },
      }),
    }),
  }),
});

export const { useGetLaunchesQuery } = launchesApi;

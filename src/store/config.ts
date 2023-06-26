import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.BASE_HOST}/`,
  prepareHeaders: (headers) => headers,
});

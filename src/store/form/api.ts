import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../config";
import { User } from "./types";

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery,
  endpoints: (builder) => ({
    saveUser: builder.mutation<Partial<User>, User>({
      query: ({ ...patch }) => ({
        url: "api/form",
        method: "POST",
        body: patch,
      }),
    }),
  }),
});

export const { useSaveUserMutation } = formApi;

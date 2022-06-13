import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3006",
	}),
	tagTypes: ["User"],
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => `/users`,
			providesTags: ["User"],
		}),
		getUser: builder.query({
			query: (id) => `users/${id}`,
			providesTags: ["User"],
		}),
		addUser: builder.mutation({
			query: (user) => ({
				url: `/users`,
				method: "POST",
				body: user,
			}),
			invalidatesTags: ["User"],
		}),
		updateUser: builder.mutation({
			query: ({id, ...rest}) => ({
				url: `users/${id}`,
				method: "PUT",
				body: rest,
			}),
			invalidatesTags: ["User"],
		}),
		deleteUser: builder.mutation({
			query: (id) => ({
				url: `users/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["User"],
		}),
	}),
});

export const {
	useGetUsersQuery,
	useGetUserQuery,
	useAddUserMutation,
	useUpdateUserMutation,
	useDeleteUserMutation,
} = usersApi;

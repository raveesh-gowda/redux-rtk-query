import React from "react";

import UserItems from "./UserItems";
import {useDeleteUserMutation, useGetUsersQuery} from "./usersApi";

const UsersList = (props) => {
	const {data, error, isLoading, isFetching, isSuccess} = useGetUsersQuery();

	const [deleteUser] = useDeleteUserMutation();

	const handleDelete = (id) => {
		deleteUser(id);
	};

	return (
		<div>
			<h2>Users List {data?.length}</h2>
			{isLoading && <p>Loading....</p>}
			{isFetching && <p>Fetching....</p>}
			{error && <p>Error in getting data.</p>}
			{isSuccess && (
				<div>
					{data?.map((user) => {
						return (
							<UserItems
								key={user.id}
								{...user}
								handleDelete={handleDelete}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default UsersList;

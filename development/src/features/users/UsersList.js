import React from "react";
import UserDetail from "./UserDetail";
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
							<div key={user.id}>
								<h4>{user.name}</h4>
								<UserDetail id={user.id} />
                                <button>Edit</button>{" "}
								<button
									onClick={() => {
										handleDelete(user.id);
									}}
								>
									Delete
								</button>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default UsersList;

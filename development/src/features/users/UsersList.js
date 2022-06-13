import React from "react";
import {useGetUsersQuery} from "./usersApi";

const UsersList = (props) => {
	const {data, error, isLoading, isFetching, isSuccess} = useGetUsersQuery();

	return (
		<div>
			<h3>Users List</h3>
			{isLoading && <p>Loading....</p>}
			{isFetching && <p>Fetching....</p>}
			{error && <p>Error in getting data.</p>}
			{isSuccess && (
				<div>
					{data?.map((user) => {
						return (
							<div key={user.id}>
								<h4>
									{user.name} - {user.email}
								</h4>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default UsersList;

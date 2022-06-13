import React from "react";

import UserAdd from "./UserAdd";
import UsersList from "./UsersList";

const UsersContainer = () => {
	return (
		<div>
			<UserAdd />
			<UsersList />
		</div>
	);
};

export default UsersContainer;

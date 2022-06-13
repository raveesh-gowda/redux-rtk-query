import React from "react";

import UserForm from "./UserForm";
import {useAddUserMutation} from "./usersApi";

const UserAdd = (props) => {
	const [addUser] = useAddUserMutation();

	const formSubmission = (formValues) => {
		addUser(formValues);
	};

	return (
		<div>
			<h2>User Form</h2>
			<UserForm formSubmission={formSubmission} />
		</div>
	);
};

export default UserAdd;

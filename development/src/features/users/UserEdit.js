import React from "react";

import UserForm from "./UserForm";
import { useUpdateUserMutation } from "./usersApi";

const UserEdit = (props) => {
	const {id, name, email, handleToggle} = props;

	const [updateUser] = useUpdateUserMutation();

    const formSubmission = (formValues) => {
        updateUser(formValues)
    }

	return (
		<div>
			<UserForm
				id={id}
				name={name}
				email={email}
				handleToggle={handleToggle}
				formSubmission={formSubmission}
			/>
		</div>
	);
};

export default UserEdit;

import React, {useState} from "react";

import {useAddUserMutation} from "./usersApi";

const UserForm = (props) => {
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const [addUser] = useAddUserMutation();
	// const {refetch} = useGetUsersQuery()

	const handleChange = (e) => {
		const attr = e.target.name;
		if (attr === "id") {
			setId(e.target.value);
		} else if (attr === "name") {
			setName(e.target.value);
		} else if (attr === "email") {
			setEmail(e.target.value);
		}
	};

	const resetForm = () => {
		setId("");
		setName("");
		setEmail("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formValues = {
			id,
			name,
			email,
		};
		resetForm();
		addUser(formValues);
		// refetch()
	};

	return (
		<div>
			<h2>User Form</h2>
			<form onSubmit={handleSubmit}>
				<label>ID</label>
				<br />
				<input type="text" name="id" value={id} onChange={handleChange} />
				<br />
				<label>Name</label>
				<br />
				<input
					type="text"
					name="name"
					value={name}
					onChange={handleChange}
				/>
				<br />
				<label>Email</label>
				<br />
				<input
					type="text"
					name="email"
					value={email}
					onChange={handleChange}
				/>
				<br />
				<input type="submit" value="Add" />
			</form>
		</div>
	);
};

export default UserForm;

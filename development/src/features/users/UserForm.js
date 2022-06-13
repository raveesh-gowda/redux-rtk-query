import React, {useState} from "react";

const UserForm = (props) => {
	const {
		id: ID,
		name: NAME,
		email: EMAIL,
		handleToggle,
		formSubmission,
	} = props;

	const [id, setId] = useState(ID ? ID : "");
	const [name, setName] = useState(NAME ? NAME : "");
	const [email, setEmail] = useState(EMAIL ? EMAIL : "");

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

		formSubmission(formValues);

		if (handleToggle) {
			handleToggle();
		}
		// refetch()
	};

	return (
		<div>
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
				<input type="submit" value="Save" />
			</form>
		</div>
	);
};

export default UserForm;

import React, {useState} from "react";

// import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";

const UserItems = (props) => {
	const { id, name, email,  handleDelete} = props;
    
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<div>
			{toggle ? (
				<div>
					<UserEdit
						id={id}
						name={name}
						email={email}
						handleToggle={handleToggle}
					/>
					<button onClick={handleToggle}>Cancel</button>
				</div>
			) : (
				<div>
					<h4>
						{id} - {name} - {email}
					</h4>
					{/* <UserDetail id={id} /> */}
					<button onClick={handleToggle}>Edit</button>{" "}
					<button
						onClick={() => {
							handleDelete(id);
						}}
					>
						Delete
					</button>
				</div>
			)}
		</div>
	);
};

export default UserItems;

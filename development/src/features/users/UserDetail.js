import React from "react";
import {useGetUserQuery} from "./usersApi";

const UserDetail = (props) => {
	const {data} = useGetUserQuery(props.id);

	return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

export default UserDetail;

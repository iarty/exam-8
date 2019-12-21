import React from "react";
import classes from "./EditBtn.module.css";

const CloseIconPage = () => {
	const cls = ["fas fa-edit", classes.Edit];
	return <i className={cls.join(" ")}></i>;
};

export default CloseIconPage;

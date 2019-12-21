import React, { Component, Fragment } from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { CATEGORYLINK } from "../../../constants";

export default class Navigation extends Component {
	clickHandler = () => {
		this.props.onClose();
	};

	render() {
		const cls = [classes.Navigation];

		if (!this.props.isOpen) {
			cls.push(classes.close);
		}

		return (
			<Fragment>
				<nav className={cls.join(" ")}>
					<div className={classes.quote}>"Quotes"</div>
					<hr />
					<ul>
						{CATEGORYLINK.map((link, index) => {
							return (
								<li key={index}>
									<NavLink
										to={link.to}
										exact={link.exact}
										activeClassName={classes.active}
										onClick={this.clickHandler}
									>
										{link.label}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</nav>
				{this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
			</Fragment>
		);
	}
}

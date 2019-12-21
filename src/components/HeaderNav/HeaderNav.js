import React, { Component } from "react";
import {
	MDBNavbar,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse
} from "mdbreact";
import { HEADERLINK } from "../../constants";

export default class HeaderNav extends Component {
	render() {
		return (
			<MDBNavbar color='indigo' dark expand='md'>
				<MDBNavbarToggler onClick={this.toggleCollapse} />
				<MDBCollapse id='navbarCollapse3' navbar>
					<MDBNavbarNav right>
						{HEADERLINK.map((link, index) => (
							<MDBNavItem key={index}>
								<MDBNavLink to={link.to} exact={link.exact}>
									{link.label}
								</MDBNavLink>
							</MDBNavItem>
						))}
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		);
	}
}

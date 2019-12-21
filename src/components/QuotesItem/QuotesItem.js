import React, { Component, Fragment } from "react";
import { MDBCard, MDBCardBody } from "mdbreact";
import { NavLink } from "react-router-dom";
import EditBtn from "../UI/EditBtn/EditBtn";
import axios from "../../axios/axios";
import Close from "../UI/Close/Close";

export default class QuotesItem extends Component {
	quoteRemove = async () => {
		await axios.delete(`/quotes/${this.props.id}.json`);
	};

	render() {
		return (
			<Fragment>
				<li className='chat-message d-flex justify-content-between mb-4'>
					<MDBCard>
						<MDBCardBody style={{ width: 900 }}>
							<div>
								<Close onClick={this.quoteRemove} />
								<NavLink to={`/quotes/${this.props.id}/edit`}>
									<EditBtn />
								</NavLink>
							</div>
							<blockquote className='mb-3 p-2'>
								<p>"{this.props.text}"</p>
							</blockquote>
							<cite className='p-2'>&mdash; {this.props.author}</cite>
						</MDBCardBody>
					</MDBCard>
				</li>
			</Fragment>
		);
	}
}

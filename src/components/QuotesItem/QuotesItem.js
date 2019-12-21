import React, { Fragment } from "react";
import { MDBCard, MDBCardBody } from "mdbreact";
import { NavLink } from "react-router-dom";
import EditBtn from "../UI/EditBtn/EditBtn";
import Close from "../UI/Close/Close";

export default function QuotesItem(props) {
	return (
		<Fragment>
			<li className='chat-message d-flex justify-content-between mb-4'>
				<MDBCard>
					<MDBCardBody style={{ width: 900 }}>
						<div>
							<Close onClick={() => props.onDelete(props.id)} />
							<NavLink to={`/quotes/${props.id}/edit`}>
								<EditBtn />
							</NavLink>
						</div>
						<blockquote className='mb-3 p-2'>
							<p>"{props.text}"</p>
						</blockquote>
						<cite className='p-2'>&mdash; {props.author}</cite>
					</MDBCardBody>
				</MDBCard>
			</li>
		</Fragment>
	);
}

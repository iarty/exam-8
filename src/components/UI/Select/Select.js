import React from "react";
import { CATEGORIES } from "../../../constants";

export default function Select({ value, onChange }) {
	return (
		<div>
			<select
				name='category'
				className='browser-default custom-select'
				onChange={onChange}
				value={value}
				required
			>
				{CATEGORIES.map((category, index) => (
					<option key={index} value={category}>
						{category}
					</option>
				))}
			</select>
		</div>
	);
}

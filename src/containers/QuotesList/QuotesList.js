import React, { Component } from "react";
import axios from "../../axios/axios";

export default class Quotes extends Component {
	state = {
		quotes: []
	};

	async componentDidMount() {
		const response = await axios.get("/quotes.json");
		this.dataHandler(response.data);
	}

	dataHandler = data => {
		const quotes = [];
		if (data) {
			Object.keys(data).forEach(key => {
				quotes.push({
					id: key,
					...data[key]
				});
			});
			this.setState({ quotes });
		}
	};

	render() {
		return (
			<div className='mt-5'>
				<h1>{"name"}</h1>
			</div>
		);
	}
}

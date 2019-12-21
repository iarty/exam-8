import React, { Component } from "react";
import axios from "../../axios/axios";
import QuotesItem from "../../components/QuotesItem/QuotesItem";
import { Lines } from "react-preloaders";

export default class Quotes extends Component {
	state = {
		quotes: [],
		loading: true
	};

	async componentDidUpdate(prevProps, prevState) {
		!prevState.loading && this.setState({ loading: true });
		if (
			this.props.match.params.name &&
			prevProps.match.params.name !== this.props.match.params.name
		) {
			const response = await axios.get(
				`/quotes.json?orderBy="category"&equalTo="${this.props.match.params.name}"`
			);
			this.dataHandler(response.data);
		} else if (prevProps.match.params.name !== this.props.match.params.name) {
			const response = await axios.get("/quotes.json");
			this.dataHandler(response.data);
		}
	}

	async componentDidMount() {
		const response = await axios.get("/quotes.json");
		this.dataHandler(response.data);
		this.props.history.push("/");
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
		this.setState({ loading: false });
	};

	quoteRemove = async id => {
		this.setState(prevState => ({ quotes: prevState.quotes.filter(el => el.id !== id) }));
		await axios.delete(`/quotes/${id}.json`);
	};

	render() {
		const name = this.props.match.params.name || "All";
		return (
			<div className='mt-5'>
				<h1>{name}</h1>
				{this.state.quotes.map((quote, index) => (
					<QuotesItem
						onDelete={this.quoteRemove}
						key={index}
						text={quote.text}
						author={quote.author}
						id={quote.id}
					/>
				))}
				<Lines customLoading={this.state.loading} />
			</div>
		);
	}
}

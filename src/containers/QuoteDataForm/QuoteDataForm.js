import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Select from "../../components/UI/Select/Select";
import axios from "../../axios/axios";
import { CATEGORIES } from "../../constants";
import { Lines } from "react-preloaders";

export default class QuoteDataForm extends Component {
	state = {
		quote: {
			author: "",
			text: "",
			category: CATEGORIES[0]
		},
		loading: true
	};

	async componentDidMount() {
    this.setState({loading: false})
		if (this.props.match.params.id) {
			const response = await axios.get(`/quotes/${this.props.match.params.id}.json`);
			const quote = response.data;
			this.setState({ quote, loading: false });
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.setState({
				quote: {
					author: "",
					text: "",
					category: CATEGORIES[0]
				},
				loading: false
			});
		}
	}

	valueChanger = event => {
		const quote = { ...this.state.quote };
		quote[event.target.name] = event.target.value;
		this.setState({ quote });
	};

	quoteSubmit = async event => {
		event.preventDefault();
		await axios.post("/quotes.json", this.state.quote);
		this.props.history.push("/");
	};

	quoteEdit = async event => {
		event.preventDefault();
		await axios.put(`/quotes/${this.props.match.params.id}.json`, this.state.quote);
		this.props.history.push("/");
	};

	render() {
		const title = this.props.title || "Submit new qoute";
		const btn = this.props.btn || "Save";
		return (
			<MDBContainer className='mt-5'>
				<MDBRow center>
					<MDBCol md='6'>
						<form onSubmit={this.props.title ? this.quoteEdit : this.quoteSubmit}>
							<p className='h4 text-center mb-4'>{title}</p>
							<label htmlFor='defaultFormContactSubjectEx' className='black-text'>
								Category
							</label>
							<Select value={this.state.quote.category} onChange={this.valueChanger} />
							<br />
							<label htmlFor='defaultFormContactSubjectEx' className='black-text'>
								Author
							</label>
							<input
								name='author'
								type='text'
								id='defaultFormContactSubjectEx'
								className='form-control'
								onChange={this.valueChanger}
								value={this.state.quote.author}
								required
							/>
							<br />
							<label htmlFor='defaultFormContactMessageEx' className='black-text'>
								Quote text
							</label>
							<textarea
								name='text'
								type='text'
								id='defaultFormContactMessageEx'
								className='form-control'
								rows='3'
								placeholder='Enter quote'
								onChange={this.valueChanger}
								value={this.state.quote.text}
								required
							/>
							<div className='mt-4'>
								<MDBBtn color='warning' outline type='submit'>
									{btn}
								</MDBBtn>
							</div>
						</form>
					</MDBCol>
				</MDBRow>
				<Lines customLoading={this.state.loading} />;
			</MDBContainer>
		);
	}
}

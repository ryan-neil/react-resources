import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Heading = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;
const Button = styled.button`
	background: white;
	color: palevioletred;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	cursor: pointer;
`;

class Demo extends Component {
	state = { clicked: false };

	handleClick = (e) => {
		this.setState((prevState) => ({
			clicked: !prevState.clicked
		}));
		console.log(this.state);
	};

	render() {
		return (
			<Div>
				<Heading>
					{this.state.clicked ? 'Clicked!!!' : 'Not clicked'}
				</Heading>
				<Button onClick={this.handleClick}>Click Me!</Button>
			</Div>
		);
	}
}

export default Demo;

import React, { Component } from 'react';

class Rando extends Component {
	constructor(props) {
		super(props);

		// set initial state
		this.state = { num: 0 };

		// invoke the state change timer method
		this.createTimer();
	}
	createTimer() {
		setInterval(() => {
			// get random number between 1 and 7 (maxNumber = 7)
			let random = Math.floor(Math.random() * this.props.maxNumber);
			// set our state to that random number
			this.setState({ num: random });
		}, 1000);
	}
	render() {
		return <h1>Your number is: {this.state.num}</h1>;
	}
}

export default Rando;

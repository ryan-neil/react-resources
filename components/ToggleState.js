import React, { Component } from 'react';

class ToggleState extends Component {
	constructor(props) {
		super(props);
		this.state = { toggled: false };
	}

	toggleState = (e) => {
		this.setState((prevState) => ({
			toggled: !prevState.toggled
		}));
	};

	render() {
		return <button onClick={this.toggleState}>Click me!</button>;
	}
}

export default ToggleState;

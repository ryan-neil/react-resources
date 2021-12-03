import React, { Component } from 'react';
import './styles/Child.css';

class Child extends Component {
	constructor(props) {
		super(props);
		this.handleAlert = this.handleAlert.bind(this);
	}

	handleAlert() {
		this.props.alert();
	}

	render() {
		return <button onClick={this.props.func}>Click me!</button>;
	}
}

export default Child;

import React, { Component } from 'react';
import './styles/Child.css';

class Child extends Component {
	render() {
		return (
			<div className="Child">
				<h2>I'm a child!</h2>
			</div>
		);
	}
}

export default Child;

import React, { Component } from 'react';
import './styles/Parent.css';
// import styled from 'styled-components';

import Child from './Child';

class Parent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="Parent">
				<h1>I'm the parent!</h1>
				<Child />
			</div>
		);
	}
}

export default Parent;

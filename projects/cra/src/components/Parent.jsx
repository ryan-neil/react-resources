import React, { Component } from 'react';
// import styled from 'styled-components';
import './styles/Parent.css';

import Child from './Child';

class Parent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nums: [ 1, 2, 3, 4, 5 ]
		};
	}

	remove(num) {
		this.setState((st) => ({
			nums: st.nums.filter((n) => n !== num)
		}));
	}

	// pass remove() as a prop (func) to the Child component
	render() {
		let nums = this.state.nums.map((n) => (
			<Child value={n} func={() => this.remove(n)} />
		));

		return (
			<div className="Parent">
				<h1>Number List</h1>
				<ul>{nums}</ul>
			</div>
		);
	}
}

export default Parent;

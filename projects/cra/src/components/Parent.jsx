import React, { Component } from 'react';
// import styled from 'styled-components';
import './styles/Parent.css';

import Child from './Child';

class Parent extends Component {
	static defaultProps = {
		todos: [
			{ task: 'wash dishes' },
			{ task: 'walk dog' },
			{ task: 'vacuum room' }
		]
	};

	constructor(props) {
		super(props);
		console.log(this.props.todos);
	}

	render() {
		const lis = this.props.todos.map((t, idx) => (
			<li key={idx}>{t.task}</li>
		));
		return <ul>{lis}</ul>;
	}
}

export default Parent;

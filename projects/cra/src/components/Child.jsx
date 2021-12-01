import React, { Component } from 'react';
import './styles/Child.css';

class Child extends Component {
	render() {
		return (
			<div className="Child">
				<li>
					{this.props.value}
					<button onClick={this.props.func}>X</button>
				</li>
			</div>
		);
	}
}

export default Child;

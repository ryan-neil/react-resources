import React, { Component } from 'react';

// Styles
import './styles/Die.css';

// Die component is only managing it's 'props' no 'state'

class Die extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<i
					className={`
            Die 
            fas fa-dice-${this.props.val} 
            ${this.props.active && 'shaking'}
          `}
				/>
			</div>
		);
	}
}

export default Die;

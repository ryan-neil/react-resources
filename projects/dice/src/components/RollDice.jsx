import React, { Component } from 'react';

// Component(s)
import Die from './Die';
// Styles
import './styles/RollDice.css';

// RollDice component is managing the 'state'

class RollDice extends Component {
	// set default props for two die
	static defaultProps = {
		sides: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};

	constructor(props) {
		super(props);
		// set initial states
		this.state = { dieOne: 'one', dieTwo: 'one', isRolling: false };
		// bind 'roll' to 'this'
		this.roll = this.roll.bind(this);
	}

	roll() {
		// pick two new die rolls
		const newRandDieOne = this.props.sides[
			Math.floor(Math.random() * this.props.sides.length)
		];
		const newRandDieTwo = this.props.sides[
			Math.floor(Math.random() * this.props.sides.length)
		];
		// update state with new rolls (causes a re-render)
		this.setState({
			dieOne: newRandDieOne,
			dieTwo: newRandDieTwo,
			isRolling: true
		});
		// after one second set isRolling back to false
		setTimeout(() => this.setState({ isRolling: false }), 1000);
	}

	render() {
		return (
			<div className="RollDice">
				<div className="RollDice-container">
					<Die
						val={this.state.dieOne}
						active={this.state.isRolling}
					/>
					<Die
						val={this.state.dieTwo}
						active={this.state.isRolling}
					/>
				</div>
				<button onClick={this.roll} disabled={this.state.isRolling}>
					{this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
				</button>
			</div>
		);
	}
}

export default RollDice;

import React, { Component } from 'react';
import styled from 'styled-components';

import LottoBall from './Child';

class Lottery extends Component {
	static defaultProps = {
		title: 'Lotto',
		numBalls: 6,
		maxNum: 40
	};

	constructor(props) {
		super(props);
		// console.log(this.props);

		this.state = {
			// create an empty array with 6 (maxBalls) possible slots
			nums: Array.from({ length: this.props.numBalls })
		};
	}

	generate = () => {
		this.setState((currState) => ({
			nums: currState.nums.map(
				(n) => Math.floor(Math.random() * this.props.maxNum) + 1
			)
		}));
	};

	handleClick = () => {
		this.generate();
	};

	// loop over nums array and create a LottoBall for each number (n), set num prop to random number from array
	render() {
		return (
			<div className="Lottery">
				<h2>{this.props.title}</h2>
				<div className="Lottery-container">
					{this.state.nums.map((n) => <LottoBall num={n} />)}
				</div>
				<button onClick={this.handleClick}>Generate</button>
			</div>
		);
	}
}

export default Lottery;

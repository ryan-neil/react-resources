import React, { Component } from 'react';
import './styles/CoinFlip.css';
// import styled from 'styled-components';

import { choice } from '../helpers';
import Coin from './Coin';

class CoinFlip extends Component {
	static defaultProps = {
		coins: [
			{
				side: 'heads',
				imgSrc:
					'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.coinnews.net%2Fwp-content%2Fuploads%2F2015%2F03%2F2015-P-Reverse-Proof-Roosevelt-Silver-Dime-Obverse.jpg&f=1&nofb=1'
			},
			{
				side: 'tails',
				imgSrc:
					'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.coinnews.net%2Fwp-content%2Fuploads%2F2015%2F03%2F2015-W-Proof-Roosevelt-Silver-Dime-Reverse.jpg&f=1&nofb=1'
			}
		]
	};

	constructor(props) {
		super(props);

		this.state = {
			currCoin: this.props.coins[0],
			// currCoin: null,
			numFlips: 0,
			numHeads: 0,
			numTails: 0
		};
	}

	flipCoin = () => {
		const randomCoin = choice(this.props.coins);

		this.setState((currState) => {
			return {
				currCoin: randomCoin,
				numFlips: currState.numFlips + 1,
				numHeads:
					currState.numHeads + (randomCoin.side === 'heads' && +1),
				numTails:
					currState.numTails + (randomCoin.side === 'tails' && +1)
			};
		});
	};

	handleClick = () => {
		this.flipCoin();
	};

	render() {
		return (
			<div className="CoinFlip">
				<h1>Let's flip a coin!</h1>

				<Coin data={this.state.currCoin} />
				{/* {this.state.currCoin && <Coin data={this.state.currCoin} />} */}

				<button onClick={this.handleClick}>Flip Coin!</button>

				<p>
					Out of {this.state.numFlips} flips, there have been{' '}
					{this.state.numHeads} heads and {this.state.numTails} tails.
				</p>
			</div>
		);
	}
}

export default CoinFlip;

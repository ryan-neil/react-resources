import React, { Component } from 'react';

import '../css/Pokedex.css';
import Pokecard from './Pokecard';

// create Pokedex component
class Pokedex extends Component {
	render() {
		// create props on Pokecard from default props
		const cards = this.props.pokemon.map((p) => (
			<Pokecard
				id={p.id}
				name={p.name}
				type={p.type}
				exp={p.base_experience}
			/>
		));

		// set conditional for results
		let title;
		if (this.props.isWinner) {
			title = <h2 className="Pokedex-winner result">Winning Hand!</h2>;
		}
		else {
			title = <h2 className="Pokedex-loser result">Losing Hand!</h2>;
		}

		return (
			<div className="Pokedex">
				{title}
				<h3 className="Pokedex-exp result">
					Total Exp: {this.props.exp}
				</h3>
				<main className="Pokedex-main">{cards}</main>
			</div>
		);
	}
}

export default Pokedex;

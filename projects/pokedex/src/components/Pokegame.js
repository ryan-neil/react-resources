import React, { Component } from 'react';
import './styles/Pokegame.css';

import Pokedex from './Pokedex';

// create Pokegame component
class Pokegame extends Component {
	render() {
		let handOne = [];
		// capture all our data inside handTwo
		let handTwo = [ ...this.props.pokemon ];

		// while hand one is smaller than hand two do this...
		while (handOne.length < handTwo.length) {
			// get random index from handTwo
			let randomIdx = Math.floor(Math.random() * handTwo.length);
			// use random index to get random pokemon
			let randomPoke = handTwo.splice(randomIdx, 1)[0];
			// push randomly selected pokemon into handOne
			handOne.push(randomPoke);
		}

		// calc total experience
		const totalExp = (arr) => {
			let total = 0;
			arr.forEach((item) => {
				total += item.base_experience;
			});
			return total;
		};

		return (
			<div className="Pokegame">
				<header className="Pokegame-header">
					<h1>Pokegame!</h1>
				</header>
				<main className="Pokegame-main">
					<Pokedex
						pokemon={handOne}
						exp={totalExp(handOne)}
						isWinner={totalExp(handOne) > totalExp(handTwo)}
					/>
					<Pokedex
						pokemon={handTwo}
						exp={totalExp(handTwo)}
						isWinner={totalExp(handTwo) > totalExp(handOne)}
					/>
				</main>
			</div>
		);
	}
}

// set default props
Pokegame.defaultProps = {
	pokemon: [
		{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
		{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
		{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
		{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
		{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
		{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
		{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
		{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
	]
};

export default Pokegame;

import React, { Component } from 'react';
import './styles/Pokecard.css';

// link for high quality poke images
const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;
// pad the ID for the POKE_API link
const padNumber = (num) => String(num).padStart(3, '0');

// create Pokecard component
class Pokecard extends Component {
	render() {
		const imgSrc = `${POKE_API}${padNumber(this.props.id)}.png`;

		return (
			<div className="Pokecard">
				{/* <div className="Pokecard is-winner"> */}
				<h2 className="Pokecard-title">{this.props.name}</h2>
				<img
					className="Pokecard-img"
					src={imgSrc}
					alt={this.props.name}
				/>
				<p className="Pokecard-type">Type: {this.props.type}</p>
				<p className="Pokecard-exp">Exp: {this.props.exp}</p>
			</div>
		);
	}
}

export default Pokecard;

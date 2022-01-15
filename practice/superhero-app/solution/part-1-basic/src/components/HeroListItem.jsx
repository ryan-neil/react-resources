import { Link } from 'react-router-dom';

const HeroListItem = ({ hero, handleChecked, handleDelete }) => {
	return (
		<li>
			<input
				type="checkbox"
				id="hero-checkbox"
				checked={hero.checked}
				onChange={() => handleChecked(hero.id)}
			/>
			<label htmlFor="hero-checkbox">Name: {hero.name}</label>
			<p>Ability: {hero.ability}</p>
			<button onClick={() => handleDelete(hero.id)}>Delete</button>
		</li>
	);
};

export default HeroListItem;

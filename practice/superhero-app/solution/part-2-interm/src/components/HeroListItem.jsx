import { Link } from 'react-router-dom';

const HeroListItem = ({ hero, handleChecked, handleDelete }) => {
	return (
		<li>
			<label htmlFor="hero-checkbox">Favorite: </label>
			<input
				type="checkbox"
				id="hero-checkbox"
				checked={hero.checked}
				onChange={() => handleChecked(hero.id)}
			/>
			<p>Name: {hero.name}</p>
			<p>Ability: {hero.ability}</p>
			<Link to={`edit/${hero.id}`}>Edit</Link>
			<button onClick={() => handleDelete(hero.id)}>Delete</button>
		</li>
	);
};

export default HeroListItem;

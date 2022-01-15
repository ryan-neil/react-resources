import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import apiRequest from '../api/apiRequest';

const Edit = ({ heros, setHeros, setFetchError }) => {
	const API_URL = 'http://localhost:9001/heros';
	const [ updateHero, setUpdateHero ] = useState('');
	const [ editName, setEditName ] = useState('');
	const [ editAbility, setEditAbility ] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	// 1. find our hero from the params
	// const selectedHero = heros.filter((hero) => hero.id === id);
	const hero = heros.find((hero) => hero.id.toString() == id);

	// 2. populate the text fields
	useEffect(
		() => {
			// if posts, set the states
			if (hero) {
				setEditName(hero.name);
				setEditAbility(hero.ability);
			}
		},
		[ hero, setEditName, setEditAbility ]
	);

	// 3. UPDATE: create and add the edited hero to the database
	const handleEdit = async (id) => {
		// update the object
		const updatedHeroList = heros.map(
			(hero) =>
				hero.id === id
					? { ...hero, name: editName, ability: editAbility }
					: hero
		);

		// set heros state
		setHeros(updatedHeroList);

		// get the selected hero list item (gives us an array of 1)
		const selectedHero = updatedHeroList.filter((hero) => hero.id === id);
		// define the update options
		const updateOptions = {
			method: 'PUT',
			body: JSON.stringify(selectedHero[0]),
			headers: {
				'Content-Type': 'application/json'
			}
		};

		// define the request url
		const requestUrl = `${API_URL}/${id}`;
		// define the request result
		const requestResult = await apiRequest(requestUrl, updateOptions);
		// update fetch error
		if (requestResult) setFetchError(requestResult);
	};

	// handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		handleEdit(hero.id);
		setEditName('');
		setEditAbility('');
		navigate('/');
	};

	return (
		<main>
			<h2>Edit the Hero!</h2>
			<form onSubmit={(e) => e.preventDefault()}>
				{/* edit name */}
				<label htmlFor="put-name">Name: </label>
				<input
					type="text"
					id="put-name"
					placeholder="Edit name"
					required
					value={editName}
					onChange={(e) => setEditName(e.target.value)}
				/>
				{/* edit ability */}
				<label htmlFor="put-ability">Ability: </label>
				<input
					type="text"
					id="put-ability"
					placeholder="Edit ability"
					required
					value={editAbility}
					onChange={(e) => setEditAbility(e.target.value)}
				/>
				{/* submit button */}
				<button type="submit" onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</main>
	);
};

export default Edit;

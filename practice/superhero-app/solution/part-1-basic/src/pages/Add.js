import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import apiRequest from '../api/apiRequest';

const Add = ({ heros, setHeros, setFetchError }) => {
	const API_URL = 'http://localhost:9001/heros';
	const [ newHero, setNewHero ] = useState('');
	const [ postName, setPostName ] = useState('');
	const [ postAbility, setPostAbility ] = useState('');
	const navigate = useNavigate();

	const handleAdd = async () => {
		// set new id
		const id = heros.length ? heros[heros.length - 1].id + 1 : 1;
		// create the new object
		const myNewHero = {
			id: id,
			name: postName,
			ability: postAbility,
			checked: false
		};

		// add new object to heros list
		const updatedHerosList = [ ...heros, myNewHero ];
		// update heros state
		setHeros(updatedHerosList);

		// create request options
		const postOptions = {
			method: 'POST',
			body: JSON.stringify(myNewHero),
			headers: {
				'Content-Type': 'application/json'
			}
		};

		// define the request result
		const reqResult = await apiRequest(API_URL, postOptions);
		// if theres a request result, update fetch error with request result
		if (reqResult) setFetchError(reqResult);
	};

	// handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		handleAdd(newHero);
		setNewHero('');
		navigate('/');
	};

	return (
		<main>
			<h2>Add a New Hero!</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="post-name">Name: </label>
				<input
					type="text"
					id="post-name"
					placeholder="Add hero"
					required
					value={postName}
					onChange={(e) => setPostName(e.target.value)}
				/>
				<label htmlFor="post-ability">Ability: </label>
				<input
					type="text"
					id="post-ability"
					placeholder="Strength"
					required
					value={postAbility}
					onChange={(e) => setPostAbility(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</main>
	);
};

export default Add;

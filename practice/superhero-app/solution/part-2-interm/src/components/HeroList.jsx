import apiRequest from '../api/apiRequest';
import HeroListItem from './HeroListItem';

const HeroList = ({ heros, setHeros, setFetchError }) => {
	const API_URL = 'http://localhost:9001/heros';

	// UPDATE item
	const handleChecked = async (id) => {
		// update the object in the list
		const updatedHeroList = heros.map(
			(hero) => (hero.id === id ? { ...hero, checked: !hero.checked } : hero)
		);
		// set the items list state
		setHeros(updatedHeroList);

		// 1. get the selected hero list item
		const selectedHero = updatedHeroList.filter((hero) => hero.id === id);
		// 2. define the options object for 'update'
		const updateOptions = {
			method: 'PATCH',
			body: JSON.stringify({ checked: selectedHero[0].checked }),
			headers: {
				'Content-Type': 'application/json'
			}
		};

		// 3. define the request url
		const requestUrl = `${API_URL}/${id}`;
		// 4. define the request result
		const requestResult = await apiRequest(requestUrl, updateOptions);
		// 5. update the fetch error state if there is a request result
		if (requestResult) setFetchError(requestResult);
	};

	// DELETE item
	const handleDelete = async (id) => {
		const updatedHerosList = heros.filter((hero) => hero.id !== id);
		setHeros(updatedHerosList);

		// 1. define the options object for 'delete'
		const deleteOptions = {
			method: 'DELETE'
		};
		// 2. define the request url
		const requestUrl = `${API_URL}/${id}`;
		// 3. define the request result
		const requestResult = await apiRequest(requestUrl, deleteOptions);
		// 4. update the fetch error state if there is a request result
		if (requestResult) setFetchError(requestResult);
	};

	return (
		<ul>
			{heros.map((hero) => (
				<HeroListItem
					key={hero.id}
					hero={hero}
					handleChecked={handleChecked}
					handleDelete={handleDelete}
				/>
			))}
		</ul>
	);
};

export default HeroList;

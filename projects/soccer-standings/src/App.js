import { useState, useEffect } from 'react';

function App() {
	const endpoint = 'standings'; // league standings
	const league = 'league=39'; // premier league
	const season = 'season=2021'; // 2021-2022 season
	const API_URL = `https://v3.football.api-sports.io/${endpoint}?${league}&${season}`;
	// set data state
	const [ items, setItems ] = useState([]);

	// fetch the data
	useEffect(() => {
		const fetchData = async () => {
			const requestOptions = {
				method: 'GET',
				headers: {
					'x-apisports-key': 'd519eb6732f354b0cb31666aa27df821',
					'x-rapidapi-host': 'v3.football.api-sports.io'
				},
				redirect: 'follow'
			};

			try {
				const res = await fetch(API_URL, requestOptions);
				if (!res.ok)
					throw Error('Did not receive expected data.');
				const data = await res.json();
				console.log(data);

				setItems(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="App">
			<h2>Soccer Standings</h2>
		</div>
	);
}

export default App;

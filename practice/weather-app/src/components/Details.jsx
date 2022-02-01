// hilo location key '328444';

import { useState, useEffect } from 'react';
import Current from './Current';
import Forecast from './Forecast';
// api's
import currentAPI from '../data/current.json';
import forecastApi from '../data/forecast.json';
// styles
import styled from 'styled-components';
const StyledDetails = styled.section`
	width: 100%;
	height: auto;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 2rem;
	background-color: var(--white);
	border-radius: var(--border-radius);
	box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, .132),
		0 .3px .9px 0 rgba(0, 0, 0, .108);
`;

// import api file
// save default state to the data
// pass data details to props

const Details = () => {
	const API_KEY = 'tHYrI9ElaccMlzUly166uJhSaZ0qdDHN';
	const [ location, setLocation ] = useState('328444'); // hilo by default
	const [ currentData, setCurrentData ] = useState(currentAPI);
	const [ forecastData, setForecastData ] = useState(forecastApi);
	const [ isLoading, setIsLoading ] = useState(false);

	const API_CURRENT_URL = `http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${API_KEY}&details=true`;

	// fetch json current data
	useEffect(() => {
		const fetchCurrentData = async () => {
			setIsLoading(true);
			const res = await fetch(API_CURRENT_URL);
			const data = await res.json();
			console.log(data);

			setCurrentData(data);
			setIsLoading(false);
		};
		// fetchCurrentData();
	}, []);

	return (
		<StyledDetails>
			<Current city="Hilo, HI" currentData={currentData} />
			<Forecast forecastData={forecastData} />
		</StyledDetails>
	);
};

export default Details;

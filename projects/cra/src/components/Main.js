import { useState } from 'react';
import styled from 'styled-components';

const MainStyled = styled.main`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Main = () => {
	const [ count, setCount ] = useState(0);

	const handleCount = () => {
		setCount(count + 1);
		console.log(count); // -> 0
	};

	return (
		<MainStyled>
			<p>Count is: {count}</p>
			<button onClick={handleCount}>Press me!</button>
		</MainStyled>
	);
};

function Car() {
	const [ car, setCar ] = useState({
		brand: 'Ford',
		model: 'Mustang',
		year: '1964',
		color: 'red'
	});

	const updateColor = () => {
		setCar((previousState) => {
			return { ...previousState, color: 'blue' };
		});
	};

	return (
		<div>
			<h1>My {car.brand}</h1>
			<p>
				It is a {car.color} {car.model} from {car.year}.
			</p>
			<button type="button" onClick={updateColor}>
				Update Car!
			</button>
		</div>
	);
}

export default Main;

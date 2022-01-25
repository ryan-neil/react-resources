import Day from './Day';
// styles
import styled from 'styled-components';
const StyledForecast = styled.div`
	display: flex;
	align-content: center;
	justify-content: center;
	gap: 1rem;
`;

const Forecast = () => {
	return (
		<StyledForecast>
			<Day title="Mon" temperature={80} />
			<Day title="Tue" temperature={78} />
			<Day title="Wed" temperature={79} />
			<Day title="Thu" temperature={80} />
			<Day title="Fri" temperature={81} />
		</StyledForecast>
	);
};

export default Forecast;

import Current from './Current';
import Forecast from './Forecast';
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

const Details = () => {
	return (
		<StyledDetails>
			<Current
				city="Hilo, HI"
				temperature={78}
				icon="icon"
				weatherText="Partly cloudy"
			/>
			<Forecast />
		</StyledDetails>
	);
};

export default Details;

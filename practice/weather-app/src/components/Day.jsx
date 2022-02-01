import styled from 'styled-components';
const StyledDay = styled.div`
	text-align: center;
	height: 175px;
	width: auto;
	padding: 1rem;
	background-color: var(--light-grey);
	border-radius: var(--border-radius);
`;

const Day = ({ title, minTemp, maxTemp, phrase }) => {
	const getDayFromEpoch = new Date(title * 1000).toLocaleString('en-us', {
		weekday: 'short'
	});

	return (
		<StyledDay>
			<p>{getDayFromEpoch}</p>
			<p>{phrase}</p>
			<p>
				{minTemp}°F - {maxTemp}°F
			</p>
		</StyledDay>
	);
};

export default Day;

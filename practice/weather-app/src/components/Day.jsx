import styled from 'styled-components';
const StyledDay = styled.div`
	text-align: center;
	height: 100px;
	width: 100px;
	padding: 1rem;
	background-color: var(--light-grey);
	border-radius: var(--border-radius);
`;

const Day = ({ title, temperature }) => {
	return (
		<StyledDay>
			<p>{title}</p>
			<p>{temperature}°F</p>
		</StyledDay>
	);
};

export default Day;

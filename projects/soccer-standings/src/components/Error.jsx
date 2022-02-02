import styled from 'styled-components';
const StyledError = styled.div`
	background-color: rgba(255, 0, 0, 0.1);
	padding: 0.75rem 1rem;
	border-radius: 5px;
	p {
		color: red;
	}
`;

const Error = ({ error }) => {
	return (
		<StyledError>
			<p>Error with the request!</p>
			<p>{error}</p>
		</StyledError>
	);
};

export default Error;

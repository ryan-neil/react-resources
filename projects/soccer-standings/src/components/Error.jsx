import styled from 'styled-components';
const StyledError = styled.div`
	background-color: rgba(255, 0, 0, 0.1);
	padding: 0.75rem 1rem;
	border-radius: 5px;
	p {
		color: red;
	}
`;

const Error = ({ fetchError }) => {
	return (
		<StyledError>
			<p>{fetchError}</p>
		</StyledError>
	);
};

export default Error;

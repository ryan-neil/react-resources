import { Link } from 'react-router-dom';
// styles
import styled from 'styled-components';
const StyledMissing = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
	gap: 1rem;
	h2 {
		font-size: 2rem;
	}
	a {
		padding: 0.25rem 0.5rem;
		background-color: var(--blue);
		border-radius: var(--border-radius);
		color: var(--white);
		&:hover {
			opacity: 0.9;
		}
	}
`;

const Missing = () => {
	return (
		<StyledMissing>
			<h2>404</h2>
			<Link to="/">Go Home</Link>
		</StyledMissing>
	);
};

export default Missing;

import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Button } from '../components/styles/Button.styled';
const StyledMain = styled.main`
	width: 100%;
	max-width: 1100px;
	padding: 1rem 1rem;
`;

const Missing = () => {
	return (
		<StyledMain>
			<h2>We can't find the page you're looking for.</h2>
			<Button>
				<Link to="/">Go Home</Link>
			</Button>
		</StyledMain>
	);
};

export default Missing;

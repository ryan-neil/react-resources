import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Container } from '../components/styles/Container.styled';

const Missing = () => {
	return (
		<Container>
			<h2>Uh oh! We can't find the page you're looking for.</h2>
			<Link to="/">Go Home</Link>
		</Container>
	);
};

export default Missing;

import { Link } from 'react-router-dom';

import styled from 'styled-components';
const StyledFooter = styled.footer`
	width: 100%;
	/* max-width: 1100px; */
	background-color: var(--white);
	padding: 3rem 1rem;
	display: flex;
	justify-content: space-between;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<p>&copy; {new Date().getFullYear()}</p>
			<Link to="https://github.com/ryan-neil">Github</Link>
		</StyledFooter>
	);
};

export default Footer;

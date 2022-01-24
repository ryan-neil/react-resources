import { Link } from 'react-router-dom';
// styles
import styled from 'styled-components';
const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding-bottom: 0.35rem;
	border-bottom: 1px solid var(--border);
`;
const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	gap: 1rem;

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

const Header = ({ title }) => {
	return (
		<StyledHeader>
			<h2>{title}</h2>
			<StyledNav>
				<Link to="/">Home</Link>
				<Link to="/favorites">Favorites</Link>
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;

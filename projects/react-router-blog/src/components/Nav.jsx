// external
import { Link } from 'react-router-dom';
import { useContext } from 'react';
// internal
import DataContext from '../context/DataContext';
// styles
import styled from 'styled-components';
import { Input } from './styles/Input.styled';
const StyledNav = styled.nav`
	width: 100%;
	max-width: 1100px;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 1rem;
	border-bottom: 1px solid ${(props) => props.theme.colors.border};
	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		gap: 0.25rem;
		a {
			padding: 0.25rem 0.75rem;
			border-radius: .35rem;
			transition: .1s ease-in;
			background: ${(props) => props.theme.colors.secondaryBG};
			color: ${(props) => props.theme.colors.heading};
			cursor: pointer;
			&:hover {
				opacity: 0.75;
			}
		}
	}
	form {
		border-radius: .35rem;
		display: flex;
		align-items: center;
		gap: 0.25rem;
		label {
			display: none;
		}
	}
`;

const Nav = () => {
	// bring in all our context props for the component
	const { search, setSearch } = useContext(DataContext);

	return (
		<StyledNav>
			{/* navigation links */}
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/post">Post</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
			{/* form */}
			<form className="search-form" onSubmit={(e) => e.preventDefault()}>
				<label htmlFor="search">Search Posts</label>
				<Input
					id="search"
					type="text"
					placeholder="Search Posts"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</form>
		</StyledNav>
	);
};

export default Nav;

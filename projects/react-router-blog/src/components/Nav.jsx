import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Input } from './styles/Input.styled';
const StyledNav = styled.nav`
	width: 100%;
	max-width: 1100px;
	padding: 1rem 1rem 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		gap: 1.2rem;
		li:hover {
			opacity: 0.8;
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

const Nav = ({ search, setSearch }) => {
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
			<form
				className="search-form"
				onSubmit={(e) => e.preventDefault()}
			>
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

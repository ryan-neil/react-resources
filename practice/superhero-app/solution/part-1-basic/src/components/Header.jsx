import { Link } from 'react-router-dom';

const Header = ({ title }) => {
	return (
		<header>
			<h2>{title}</h2>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/add">Add</Link>
			</nav>
		</header>
	);
};

export default Header;

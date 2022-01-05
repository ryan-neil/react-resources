const Header = ({ title }) => {
	return (
		<div>
			<h2>{title}</h2>
		</div>
	);
};

Header.defaultProps = {
	title: 'Todo List'
};

export default Header;

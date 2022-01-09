const Footer = ({ length }) => {
	return (
		<footer>
			<h2>{length} Objects in List</h2>
		</footer>
	);
};

Footer.defaultProps = {
	length: 0
};

export default Footer;

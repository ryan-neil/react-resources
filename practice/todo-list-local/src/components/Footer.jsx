const Footer = ({ length }) => {
	return (
		<div>
			<h2>{length} Items in List</h2>
		</div>
	);
};

Footer.defaultProps = {
	length: 0
};

export default Footer;

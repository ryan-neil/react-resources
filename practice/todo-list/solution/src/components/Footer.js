const Footer = ({ length }) => {
	return (
		<div>
			<h2>{length} items in list</h2>
		</div>
	);
};

Footer.defaultProps = {
	length: 0
};

export default Footer;

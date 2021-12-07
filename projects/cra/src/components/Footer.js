import styled from 'styled-components';

const FooterStyled = styled.footer`
	width: 100%;
	text-align: center;
	background-color: royalblue;
	color: white;
	padding: .5rem 0;
`;

const Footer = () => {
	const today = new Date();

	return (
		<FooterStyled>
			<h2>Footer section</h2>
			<p>Copyright &copy; {today.getFullYear()}</p>
		</FooterStyled>
	);
};

export default Footer;

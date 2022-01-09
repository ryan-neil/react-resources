import styled from 'styled-components';
const StyledFooter = styled.footer`
	width: 100%;
	padding: 2rem 1rem;
	background-color: ${(props) => props.theme.colors.secondaryBG};
	.wrapper {
		width: ${({ theme }) => theme.web.width};
		max-width: 100%;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		p {
			font-size: 0.9rem;
		}
		a {
			font-size: 0.9rem;
		}
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<div className="wrapper">
				<p>&copy; {new Date().getFullYear()}</p>
				<a href="https://github.com/ryan-neil">Github</a>
			</div>
		</StyledFooter>
	);
};

export default Footer;

// external
import { Link } from 'react-router-dom';
// styles
import styled from 'styled-components';
const StyledFooter = styled.footer`
	width: 100%;
	font-size: 0.9rem;
	background-color: ${({ theme }) => theme.colors.secondaryBG};
	padding: 2rem 0;
	margin-top: 2rem;
	.footer-container {
		margin: auto;
		padding: 0.5rem 1rem;
		width: 100%;
		max-width: 1100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		a {
			color: ${({ theme }) => theme.colors.paragraph};
		}
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<div className="footer-container">
				<p>&copy; {new Date().getFullYear()}</p>
				<Link to="https://github.com/ryan-neil">Github</Link>
			</div>
		</StyledFooter>
	);
};

export default Footer;

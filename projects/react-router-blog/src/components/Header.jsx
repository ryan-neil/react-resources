import styled from 'styled-components';
import { Button } from './styles/Button.styled';

const StyledHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--white);
	box-shadow: 0px 0px 5px 0px var(--shadow);
	.header-container {
		padding: 0.5rem 1rem;
		width: 100%;
		max-width: 1100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	h1 {
		font-size: 1.4rem;
		font-weight: 500;
		letter-spacing: .025em;
	}
	.button-container {
		display: flex;
		gap: 0.5rem;
	}
`;

const Header = ({ title }) => {
	return (
		<StyledHeader>
			<div className="header-container">
				<h1>{title}</h1>
				<div className="button-container">
					<Button secondary>Log in</Button>
					<Button>Sign up</Button>
				</div>
			</div>
		</StyledHeader>
	);
};

export default Header;

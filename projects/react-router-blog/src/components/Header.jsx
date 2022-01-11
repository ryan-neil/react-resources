import styled from 'styled-components';
import { LightMode, DarkMode } from '@styled-icons/material';
import { Button } from './styles/Button.styled';

const StyledHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.primaryBG};
	border-bottom: 1px solid ${(props) => props.theme.colors.border};
	box-shadow: 0px 0px 5px 0px ${(props) => props.theme.colors.boxShadow};
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
const SunIcon = styled(LightMode)`
  color: ${(props) => props.theme.colors.heading};
  width: 1.8rem;
	height: 1.8rem;
  padding-left: .25rem;
  padding-right: .25rem;
  border-radius: .25rem;
  cursor: pointer;
  transition: ${(props) => props.theme.colors.transition};
  
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryBG};
  }
  `;
const MoonIcon = styled(DarkMode)`
  color: ${(props) => props.theme.colors.heading};
  width: 1.8rem;
	height: 1.8rem;
  padding-left: .25rem;
  padding-right: .25rem;
  border-radius: .25rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryBG};
  }
`;

const Header = ({ title, theme, setTheme }) => {
	// toggle theme logic
	const toggleTheme = () =>
		theme === 'light' ? setTheme('dark') : setTheme('light');

	// set theme logic
	const themeIcon =
		theme === 'light' ? (
			<MoonIcon onClick={toggleTheme} />
		) : (
			<SunIcon onClick={toggleTheme} />
		);

	return (
		<StyledHeader>
			<div className="header-container">
				<h1>{title}</h1>
				<div className="button-container">
					<Button secondary>Log in</Button>
					<Button>Sign up</Button>
					{themeIcon}
				</div>
			</div>
		</StyledHeader>
	);
};

export default Header;

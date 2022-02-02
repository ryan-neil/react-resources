import styled from 'styled-components';
import { LightMode, DarkMode } from '@styled-icons/material';
const StyledHeader = styled.header`
	width: 100%;
	padding: 1rem 1rem;
	background-color: ${(props) => props.theme.colors.primaryBG};
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	.wrapper {
		width: ${({ theme }) => theme.web.width};
		max-width: 100%;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		h1 {
			font-size: 1.2rem;
			font-weight: 500;
			margin-right: .5rem;
			letter-spacing: .025em;
		}
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

const Header = ({ theme, setTheme }) => {
	const toggleTheme = () =>
		theme === 'light' ? setTheme('dark') : setTheme('light');

	const themeIcon =
		theme === 'light' ? (
			<MoonIcon onClick={toggleTheme} />
		) : (
			<SunIcon onClick={toggleTheme} />
		);

	return (
		<StyledHeader>
			<div className="wrapper">
				<h1>Tables</h1>
				{themeIcon}
			</div>
		</StyledHeader>
	);
};

export default Header;

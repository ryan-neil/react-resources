import styled from 'styled-components';
// https://fonts.google.com/icons?selected=Material+Icons
import { Search, LightMode, DarkMode } from '@styled-icons/material';

// Header
export const StyledHeader = styled.header`
	background-color: ${(props) => props.theme.colors.primaryBG};
	padding: 20px 0;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
		0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

// Navbar
export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

// Header Left
// Logo
export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;
export const Img = styled.img`
	height: 36px;
	width: 36px;
	margin-right: .5rem;
`;
export const H1 = styled.h1`
	font-size: 1.6rem;
	font-weight: 500;
	margin-right: .5rem;
	letter-spacing: .025em;
`;
export const Tag = styled.p`
	color: ${(props) => props.theme.colors.primary};
	background-color: ${(props) => props.theme.colors.primaryLight};

	font-size: 0.7rem;
	padding: 0 .25rem;
	letter-spacing: .025em;
	border-radius: .25rem;
	text-transform: uppercase;
`;

// Header Center
// Search
export const SearchContainer = styled.div`
	background-color: ${(props) => props.theme.colors.inputBG};
	display: flex;
	align-items: center;
	height: 2.5rem;
	padding: 0.25rem 1rem;
	border-radius: .5rem;
	box-shadow: ${(props) => props.theme.colors.boxShadowInset};

	/* Responsive Queries */
	@media (max-width: ${(props) => props.theme.mobile.width}) {
		display: none;
	}
`;
export const InputSearchIcon = styled(Search)`
  color: ${(props) => props.theme.colors.paragraphLight};
  width: 1rem;
  margin-right: .5rem;
`;
export const Input = styled.input`
	color: ${(props) => props.theme.colors.paragraph};
	font-size: .9rem;
	letter-spacing: .025em;
	text-align: left;
	background: transparent;
	border: none;
	outline: none;

	&::placeholder {
		color: ${(props) => props.theme.colors.paragraphLight};
	}
`;

// Header Right
export const SearchIcon = styled(Search)`
  display: none;
  color: ${(props) => props.theme.colors.heading};
  width: 1.8rem;
  height: 1.8rem;
  margin-right: .5rem;
  padding-left: .25rem;
  padding-right: .25rem;
  border-radius: .25rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryBG};
  }

  /* Responsive Queries */
	@media (max-width: ${(props) => props.theme.mobile.width}) {
		display: block;
	}
`;
export const SunIcon = styled(LightMode)`
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
export const MoonIcon = styled(DarkMode)`
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

import styled from 'styled-components';
// https://fonts.google.com/icons?selected=Material+Icons
import { Search, LightMode, DarkMode } from '@styled-icons/material';

// Header
export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.colors.primaryBG};
	padding: 20px 0;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

// Navbar
export const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

// Logo
export const StyledLogo = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	img {
		height: 36px;
		width: 36px;
		margin-right: .5rem;
	}
	h1 {
		font-size: 1.6rem;
		font-weight: 500;
		margin-right: .5rem;
		letter-spacing: .025em;
	}
	p {
		color: ${({ theme }) => theme.colors.primary};
		background-color: ${({ theme }) => theme.colors.primaryLight};

		font-size: 0.7rem;
		padding: 0 .25rem;
		letter-spacing: .025em;
		border-radius: .25rem;
		text-transform: uppercase;
	}
`;

// SearchBar
export const StyledSearchBar = styled.div`
	background-color: ${({ theme }) => theme.colors.inputBG};
	display: flex;
	align-items: center;
	height: 2.5rem;
	padding: 0.25rem 1rem;
	border-radius: .5rem;
	box-shadow: ${({ theme }) => theme.colors.boxShadowInset};
	input {
		color: ${({ theme }) => theme.colors.paragraph};
		font-size: .9rem;
		letter-spacing: .025em;
		text-align: left;
		background: transparent;
		border: none;
		/* outline: none; */
		&::placeholder {
			color: ${({ theme }) => theme.colors.paragraphLight};
		}
	}

	/* Responsive Queries */
	@media (max-width: ${({ theme }) => theme.mobile.width}) {
		display: none;
	}
`;
// SearchBar Icon
export const InputSearchIcon = styled(Search)`
  color: ${({ theme }) => theme.colors.paragraphLight};
  width: 1rem;
  margin-right: .5rem;
`;

// Search Icon
export const SearchIcon = styled(Search)`
  display: none;
  color: ${({ theme }) => theme.colors.heading};
  width: 1.8rem;
  height: 1.8rem;
  margin-right: .5rem;
  padding-left: .25rem;
  padding-right: .25rem;
  border-radius: .25rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryBG};
  }
  /* Responsive Queries */
	@media (max-width: ${({ theme }) => theme.mobile.width}) {
		display: block;
	}
`;
// Sun Icon
export const SunIcon = styled(LightMode)`
  color: ${({ theme }) => theme.colors.heading};
  width: 1.8rem;
	height: 1.8rem;
  padding-left: .25rem;
  padding-right: .25rem;
  border-radius: .25rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.colors.transition};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryBG};
  }
`;
// Moon Icon
export const MoonIcon = styled(DarkMode)`
  color: ${({ theme }) => theme.colors.heading};
  width: 1.8rem;
	height: 1.8rem;
  padding-left: .25rem;
  padding-right: .25rem;
  border-radius: .25rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryBG};
  }
`;

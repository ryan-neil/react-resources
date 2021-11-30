import styled from 'styled-components';

// Header
export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.colors.header};
	padding: 20px 0;
`;

// Navbar
export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 40px;

	/* Responsive Queries */
	@media (max-width: ${({ theme }) => theme.mobile.width}) {
		flex-direction: column;
	}
`;

// App logo
export const Logo = styled.img`
	/* Responsive Queries */
	@media (max-width: ${({ theme }) => theme.mobile.width}) {
		margin-bottom: 40px;
	}
`;

// Headings
export const H1 = styled.h1`
	font-size: 32px;
	margin-bottom: 20px;
`;

// Paragraphs
export const Paragraph = styled.p`
	margin-bottom: 15px;
	font-size: 16px;
`;

// App image
export const Image = styled.img`
	width: 425px;
	margin-left: 40px;

	/* Responsive Queries */
	@media (max-width: ${({ theme }) => theme.mobile.width}) {
		margin: 40px 0 30px;
	}
`;

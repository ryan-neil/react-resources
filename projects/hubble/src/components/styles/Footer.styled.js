import styled from 'styled-components';

const FooterStyled = styled.footer`
	background-color: ${({ theme }) => theme.colors.footer};
	color: #ffffff;
	padding: 75px 0;

	img {
		margin-bottom: 1rem;
	}
	ul {
		list-style-type: none;
	}
	ul li {
		margin-bottom: 1rem;
	}
	p {
		text-align: right;
	}
	/* Responsive Queries */
	@media (max-width: ${({ theme }) => theme.mobile.width}) {
		text-align: center;
		ul {
			padding: 0;
		}
		p {
			text-align: center;
		}
	}
`;

export default FooterStyled;

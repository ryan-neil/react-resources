import styled from 'styled-components';

const CardStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	padding: 2rem;
	margin: 40px 0;
	text-align: left;
	background-color: #ffffff;
	border-radius: 15px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

	& > div {
		flex: 1;
	}
	&:nth-child(odd) {
		flex-direction: row-reverse;
	}
	& img {
		width: 80%;
	}
	/* Responsive Queries */
	@media (max-width: ${({ theme }) => theme.mobile.width}) {
		padding: 1rem;
		flex-direction: column;
		text-align: center;

		&:nth-child(odd) {
			flex-direction: column;
		}
	}
`;

export default CardStyled;

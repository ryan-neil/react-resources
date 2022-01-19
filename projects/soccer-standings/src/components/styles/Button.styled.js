import styled, { css } from 'styled-components';
const Button = styled.button`
	border: none;
	background: transparent;
	height: 100%;
	padding: 0.25rem 0.75rem;
	font-size: 1rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.heading};
	background-color: ${({ theme }) => theme.colors.secondaryBG};
	border-radius: .35rem;
	cursor: pointer;
	transition: .1s ease-in;
	/* removes 100% width of flex parent */
	align-self: flex-start;
	&:hover {
		opacity: 0.9;
	}
	${(props) =>
		props.selected &&
		css`
			color: ${({ theme }) => theme.colors.primary};
			background-color: ${({ theme }) => theme.colors.primaryLight};
		`};
`;

export { Button };

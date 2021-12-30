import styled, { css } from 'styled-components';
const Button = styled.button`
	border: none;
	background: transparent;
	height: 100%;
	padding: 0.25rem 0.75rem;
	font-size: 1rem;
	font-weight: 500;
	color: var(--white);
	background-color: var(--blue);
	border-radius: .35rem;
	cursor: pointer;
	transition: .1s ease-in;
	&:hover {
		opacity: 0.9;
	}
	${(props) =>
		props.secondary &&
		css`
			background-color: var(--white);
			color: var(--text-h);
			&:hover {
				background-color: var(--light-grey);
			}
		`};
`;

export { Button };

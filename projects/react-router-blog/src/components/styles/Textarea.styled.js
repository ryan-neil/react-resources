import styled from 'styled-components';
const Textarea = styled.textarea`
	min-width: 300px;
	min-height: 300px;
	padding: 0.25rem 0.75rem;
	background-color: var(--white);
	border: 1px solid var(--border);
	border-radius: .35rem;
	font-size: 0.9rem;
	&::placeholder {
		color: var(--text-light);
	}
`;

export { Textarea };
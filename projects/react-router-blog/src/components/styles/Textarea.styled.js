import styled from 'styled-components';
const Textarea = styled.textarea`
	min-width: 300px;
	min-height: 300px;
	padding: 0.25rem 0.75rem;
	color: ${(props) => props.theme.colors.paragraph};
	background-color: ${(props) => props.theme.colors.secondaryBG};
	border: 1px solid ${(props) => props.theme.colors.border};
	border-radius: .35rem;
	font-size: 0.9rem;
	&::placeholder {
		color: ${(props) => props.theme.colors.paragraphLight};
	}
`;

export { Textarea };

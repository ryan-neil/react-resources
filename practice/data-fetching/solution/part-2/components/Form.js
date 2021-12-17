import Button from './Button';
import styled from 'styled-components';
const FormStyled = styled.form`
	width: 100%;
	padding: 0.5rem 1rem;
	display: flex;
	justify-content: space-between;
	gap: 0.5rem;

	position: fixed;
	background-color: #fff;
`;

const Form = ({ reqType, setReqType }) => {
	return (
		<FormStyled onSubmit={(e) => e.preventDefault}>
			<Button
				buttonText="users"
				reqType={reqType}
				setReqType={setReqType}
			/>
			<Button
				buttonText="posts"
				reqType={reqType}
				setReqType={setReqType}
			/>
			<Button
				buttonText="comments"
				reqType={reqType}
				setReqType={setReqType}
			/>
		</FormStyled>
	);
};

export default Form;

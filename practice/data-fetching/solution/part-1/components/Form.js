import Button from './Button';
import styled from 'styled-components';
const FormStyled = styled.form`
	width: 100%;
	display: flex;
	justify-content: space-between;
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

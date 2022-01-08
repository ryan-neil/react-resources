import Button from './Button';

const Header = ({ reqType, setReqType }) => {
	return (
		<header>
			<form onSubmit={(e) => e.preventDefault()}>
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
			</form>
		</header>
	);
};

export default Header;

const ChildOne = ({ data, loading, error }) => {
	// get users' emails
	const getUserEmails = () => {
		let emails = [];
		for (let user of data) {
			emails.push(user.email);
		}
		return emails;
	};
	console.log(getUserEmails());

	return (
		<div>
			<h2>Child One Component</h2>
			{loading && <p>Loading...</p>}

			{data && !loading && !error && (
				<>
					<h3>Usernames:</h3>
					<ul>
						{data.map((user) => (
							<li key={user.id}>{user.name}</li>
						))}
					</ul>
					<h3>Emails:</h3>
					<ul>
						{getUserEmails().map((user) => (
							<li key={user.id}>{user}</li>
						))}
					</ul>
				</>
			)}

			{error && <p>Error loading data...</p>}
		</div>
	);
};

export default ChildOne;

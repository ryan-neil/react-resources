const ChildTwo = ({ data, loading, error }) => {
	const getUserEmails = () => {
		let emails = [];
		for (let user of data) {
			emails.push(user.email);
		}
		return { emails };
	};
	const { emails } = getUserEmails();
	console.log(emails);

	return (
		<div>
			<h2>Child Two Component</h2>
			<h3>Users' names:</h3>
			{loading && <p>Loading...</p>}

			{data && !loading && !error && (
				<ul>
					{data.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			)}

			{error && <p>Error loading data...</p>}
		</div>
	);
};

export default ChildTwo;

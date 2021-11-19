class App extends React.Component {
	render() {
		const emojis = [ '🍇', '🍏', '🍉' ];
		const selectRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

		return (
			<div>
				<h1>Slot Machines!</h1>
				<Machine
					s1={selectRandom(emojis)}
					s2={selectRandom(emojis)}
					s3={selectRandom(emojis)}
				/>
				<Machine
					s1={selectRandom(emojis)}
					s2={selectRandom(emojis)}
					s3={selectRandom(emojis)}
				/>
				<Machine
					s1={selectRandom(emojis)}
					s2={selectRandom(emojis)}
					s3={selectRandom(emojis)}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

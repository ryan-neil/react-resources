// create App component
class App extends React.Component {
	render() {
		return (
			<Friend
				name="Thor"
				hobbies={[ 'Smashing', 'Drinking', 'Hammering' ]}
			/>
		);
	}
}

// render App component
ReactDOM.render(<App />, document.getElementById('root'));

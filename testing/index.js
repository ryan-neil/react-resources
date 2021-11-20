// create App component
class App extends React.Component {
	render() {
		return (
			<div>
				<Superhero
					name="Thor"
					hobbies={[ 'Smashing', 'Drinking', 'Hammering' ]}
					mortal={false}
				/>
				<Superhero
					name="Iron Man"
					hobbies={[ 'Technology', 'Partying', 'Flying' ]}
					mortal={true}
				/>
			</div>
		);
	}
}

// render App component
ReactDOM.render(<App />, document.getElementById('root'));

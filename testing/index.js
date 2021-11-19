// create App component
class App extends React.Component {
	render() {
		return (
			<div>
				<Superhero
					name="Thor"
					hobbies={[ 'Smashing', 'Drinking', 'Hammering' ]}
					organization="Marvel"
					rating={4}
				/>
				<Superhero
					name="Iron Man"
					hobbies={[ 'Technology', 'Partying', 'Flying' ]}
					rating={5}
				/>
			</div>
		);
	}
}

// render App component
ReactDOM.render(<App />, document.getElementById('root'));

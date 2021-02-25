import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" />
					<Route exact path="saved" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

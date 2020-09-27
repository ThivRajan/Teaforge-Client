import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import JoinForm from './components/JoinForm';
import CreateForm from './components/CreateForm';
import RoomLobby from './components/RoomLobby';

import GlobalStyle from './styles/Global';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Switch>
				<Route path="/lobby">
					<RoomLobby />
				</Route>

				<Route path="/join">
					<JoinForm />
				</Route>

				<Route path="/create">
					<CreateForm />
				</Route>

				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</>
	);
};

export default App;

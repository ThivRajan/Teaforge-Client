import React from 'react';
// import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Description from './components/Description';
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

				<Route path="/resistance">
					<Description />
				</Route>

				<Route path="/">
					<Main />
				</Route>
			</Switch>
		</>
	);
};

export default App;

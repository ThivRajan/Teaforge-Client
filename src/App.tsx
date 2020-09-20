import React from 'react';
// import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Description from './components/Description';
import JoinForm from './components/JoinForm';
import CreateForm from './components/CreateForm';
import RoomLobby from './components/RoomLobby';

// const Center = styled.div`
// 	text-align: center;
// 	list-style-position: inside;
// `;

// const Grid = styled.div`
// 	display: grid;
// 	grid-template-columns: 1fr;
// 	text-align: center;
// 	list-style-position: inside;
// 	border: 1px solid;
// `;

const App = () => {
	return (
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
	);
};

export default App;

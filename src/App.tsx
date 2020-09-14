import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import Description from './Components/Description';
import JoinForm from './Components/JoinForm';
import CreateForm from './Components/CreateForm';
import RoomLobby from './Components/RoomLobby';

// const Center = styled.div`
// 	text-align: center;
// 	list-style-position: inside;
// `;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	text-align: center;
	list-style-position: inside;
`;

const App = () => {
	return (
		<Grid>
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
					<Home />
				</Route>
			</Switch>
		</Grid>
	);
};

export default App;

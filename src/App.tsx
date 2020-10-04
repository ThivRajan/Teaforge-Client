import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/Global';

import DarkMode from './components/DarkMode';
import Home from './components/Home';
import JoinForm from './components/JoinRoom';
import CreateForm from './components/CreateRoom';
import RoomLobby from './components/RoomLobby';

import { Games } from './types';

const App = () => {
	const [darkMode, setdarkMode] = useState(false);

	const toggleTheme = (currTheme: boolean) => setdarkMode(!currTheme);

	return (
		<ThemeProvider theme={{ darkMode }}>
			<DarkMode toggleTheme={toggleTheme} darkMode={darkMode} />
			<GlobalStyle />
			<Switch>
				<Route path={`/${Games.Resistance}/*`}>
					<RoomLobby />
				</Route>

				<Route path="/join">
					<JoinForm />
				</Route>

				<Route path={`/create/${Games.Resistance}`}>
					<CreateForm game={Games.Resistance} />
				</Route>

				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</ThemeProvider>
	);
};

export default App;

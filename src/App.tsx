import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import DarkMode from './components/DarkMode';
import Home from './components/Home';
import JoinForm from './components/JoinForm';
import CreateForm from './components/CreateForm';
import RoomLobby from './components/RoomLobby';

import GlobalStyle from './styles/Global';

const App = () => {
	const [darkMode, setdarkMode] = useState(false);

	const toggleTheme = (currTheme: boolean) =>
		setdarkMode(!currTheme);

	return (
		<ThemeProvider theme={{ darkMode }}>
			<DarkMode toggleTheme={toggleTheme} darkMode={darkMode} />
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
		</ThemeProvider>
	);
};

export default App;

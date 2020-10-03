import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Button from '../styles/Button';

import { useStateValue } from '../state';

const RoomLobby = () => {
	const [{ socket, key },] = useStateValue();
	const [players, setPlayers] = useState<string[]>([]);

	useEffect(() => {
		if (socket) {
			socket.emit('getPlayers', key);
			socket.on('players', (playerNames: string[]) => {
				setPlayers(playerNames);
			});
		}
	}, [players, socket, key]);


	return (
		<Lobby>
			<h1>{`Resistance: ${key}`}</h1>
			<p>Need 3 more players to start</p>
			<ol>
				{players.map(p => <li key={p}>{p}</li>)}
			</ol>
			<Link to="/">
				<Button.Outlined>Leave</Button.Outlined>
			</Link>
			<Button.Filled>Start</Button.Filled>
		</Lobby>
	);
};

const Lobby = styled.div`
	h1 {
		text-transform: none;
	}

	ol {
		list-style: decimal inside;
		margin-bottom: 20px;
		font-size: 20px;
		font-weight: 300;
	}
`;

export default RoomLobby;
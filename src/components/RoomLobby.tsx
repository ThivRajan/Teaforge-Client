import React, { useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Button from '../styles/Button';

import { useStateValue } from '../state';

const RoomLobby = () => {
	const [{ socket, key },] = useStateValue();
	const [players, setPlayers] = useState<string[]>([]);

	if (!socket) return (<>...Loading</>);

	socket.emit('joinRoom', key);
	socket.on('players', (data: string[]) => setPlayers(data));
	console.log(players);

	return (
		<div>
			<h1>Room Lobby</h1>
			<p>Need 3 more players to start</p>
			<PlayerList>
				{players.map(p => <li key={p}>{p}</li>)}
			</PlayerList>
			<Link to="/">
				<Button.Outlined>Leave</Button.Outlined>
			</Link>
			<Button.Filled>Start</Button.Filled>
		</div>
	);
};

const PlayerList = styled.ol`
	list-style: decimal inside;
	margin-bottom: 20px;
	font-size: 20px;
	font-weight: 300;
`;

export default RoomLobby;
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Link, useHistory } from 'react-router-dom';
import Button from '../styles/Button';

import { RoomInfo } from '../types';
import { useStateValue } from '../state';
import { clearState } from '../state/reducer';
import { setGame } from '../state/reducer';

//TODO: Consider saving key as part of local machine AND/OR state
const RoomLobby = () => {
	const [{ socket, name, game, key }, dispatch] = useStateValue();
	const history = useHistory();

	useEffect(() => {
		if (game && socket && key) {
			socket.on('update', (game: RoomInfo) => {
				dispatch(setGame(game));
			});
		} else {
			history.push('/join');
		}
	}, [history, socket, key, game, dispatch]);

	if (!game || !name || !key || !socket) return <>...Loading</>;

	const handleLeave = () => {
		socket?.close();
		dispatch(clearState());
	};

	const handleStart = () => {
		socket?.emit('start');
	};

	const startButton = () => {
		if (name === game.host) {
			return (
				<Button.Filled onClick={handleStart}>
					Start
				</Button.Filled>
			);
		}
		return null;
	};

	return (
		<Lobby>
			<h1>{`${game.name}: ${key}`}</h1>
			<p>Need {game.reqPlayers - game.players.length} more players to start</p>
			<ol>
				{game.players.map(p =>
					(game.host === p)
						? <li key={p}>{p} (Host)</li>
						: <li key={p}>{p}</li>
				)}
			</ol>
			<Link to="/">
				<Button.Outlined onClick={handleLeave}>Leave</Button.Outlined>
			</Link>
			{startButton()}
		</Lobby>
	);
};

const Lobby = styled.div`
	ol {
		list-style: decimal inside;
		margin-bottom: 20px;
		font-size: 20px;
		font-weight: 300;
	}
`;

export default RoomLobby;
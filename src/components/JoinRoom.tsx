import React, { useState } from 'react';
import io from 'socket.io-client';

import { Link, useHistory } from 'react-router-dom';
import Form from '../styles/Form';
import Button from '../styles/Button';
import Message from './misc/Message';

import { RoomInfo } from '../types';
import { SERVER_URI } from '../constants';
import { useStateValue } from '../state';
import { setSocket, setName, setGame, setKey, setMessage } from '../state/reducer';

const JoinForm = () => {
	const [name, setNameField] = useState('');
	const [key, setKeyField] = useState('');

	const [, dispatch] = useStateValue();
	const history = useHistory();

	const handleJoin = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const socket = io.connect(SERVER_URI);
		socket.on('invalid', (message: string) => dispatch(setMessage(message)));
		socket.on('valid', (game: RoomInfo) => {
			dispatch(setSocket(socket));
			dispatch(setName(name));
			dispatch(setGame(game));
			dispatch(setKey(key));
			history.push(`/${game.name}/${key}`);
		});
		socket.emit('join', name, key);
	};

	return (
		<>
			<h1>Join Room</h1>
			<Form>
				<Message />
				<input placeholder="Name"
					value={name}
					onChange={event => setNameField(event.target.value)}
				></input>
				<br />
				<input placeholder="Room Key"
					value={key}
					onChange={event => setKeyField(event.target.value)}
				></input>
				<br />
				<Link to="/lobby">
					<Button.Filled onClick={handleJoin}>Join</Button.Filled>
				</Link>
				<Link to="/">
					<Button.Outlined>Cancel</Button.Outlined>
				</Link>
			</Form>
		</>
	);
};

export default JoinForm;
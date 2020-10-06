import React, { useState } from 'react';
import io from 'socket.io-client';

import { Link, useHistory } from 'react-router-dom';
import Form from '../styles/Form';
import Button from '../styles/Button';

import { Games } from '../types';
import { SERVER_URI } from '../constants';
import { useStateValue } from '../state';
import { setSocket, setMessage, setGame, setKey } from '../state/reducer';

//TODO: form validation
const JoinForm = () => {
	const [name, setName] = useState('');
	const [key, setRoomKey] = useState('');

	const [, dispatch] = useStateValue();
	const history = useHistory();

	const handleJoin = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const socket = io.connect(SERVER_URI);
		socket.on('invalid', (message: string) => dispatch(setMessage(message)));
		socket.on('valid', (game: Games) => {
			dispatch(setSocket(socket));
			dispatch(setGame(game));
			dispatch(setKey(key));
			history.push(`/${game}/${key}`);
		});
		socket.emit('join', name, key);
	};

	return (
		<>
			<h1>Join Room</h1>
			<Form>
				<input placeholder="Name"
					value={name}
					onChange={event => setName(event.target.value)}
				></input>
				<br />
				<input placeholder="Room Key"
					value={key}
					onChange={event => setRoomKey(event.target.value)}
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
import React, { useState } from 'react';
import io from 'socket.io-client';

import { Link, useHistory } from 'react-router-dom';
import Form from '../styles/Form';
import Button from '../styles/Button';

import { Games } from '../types';
import { useStateValue } from '../state';
import { setSocket, setKey } from '../state/reducer';

const JoinForm = () => {
	const [name, setName] = useState('');
	const [key, setRoomKey] = useState('');
	const [, dispatch] = useStateValue();
	const history = useHistory();

	//TODO: fix join structure to not use 'Games.Resistance' as part of socket
	const handleJoin = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const socket = io.connect(`http://localhost:3001/${Games.Resistance}`);
		dispatch(setSocket(socket));
		socket.emit('join', name, key);

		//TODO: change alert to on-page display
		socket.on('invalidKey', () => alert('Invalid Key'));

		socket.on('validKey', () => {
			dispatch(setKey(key));
			history.push(`/${Games.Resistance}/${key}`);
		});
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
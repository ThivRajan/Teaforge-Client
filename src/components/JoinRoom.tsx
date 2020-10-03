import React, { useState } from 'react';
import io from 'socket.io-client';

import { Link, useHistory } from 'react-router-dom';
import Form from '../styles/Form';
import Button from '../styles/Button';

import { Games } from '../types';
import { useStateValue } from '../state';
import { setSocket } from '../state/reducer';

const JoinForm = () => {
	const [name, setName] = useState('');
	const [key, setKey] = useState('');
	const [, dispatch] = useStateValue();
	const history = useHistory();

	const handleJoin = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const socket = io.connect(`http://localhost:3001/${Games.Resistance}`);
		dispatch(setSocket(socket));

		socket.emit('join', name);
		history.push(`/${Games.Resistance}/${key}`);
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
					onChange={event => setKey(event.target.value)}
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
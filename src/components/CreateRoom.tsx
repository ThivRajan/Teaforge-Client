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
const CreateForm: React.FC<{ game: Games }> = ({ game }) => {
	const [name, setName] = useState('');
	const [, dispatch] = useStateValue();
	const history = useHistory();

	const handleCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const socket = io.connect(SERVER_URI);
		socket.on('invalid', (message: string) => dispatch(setMessage(message)));
		socket.on('roomKey', (key: string) => {
			dispatch(setSocket(socket));
			dispatch(setGame(game));
			dispatch(setKey(key));
			history.push(`/${game}/${key}`);
		});
		socket.emit('create', name, game);
	};

	return (
		<>
			<h1>Create Room</h1>
			<Form>
				<input placeholder="Name"
					value={name}
					onChange={event => setName(event.target.value)}>
				</input>
				<br />
				<Button.Filled onClick={handleCreate}>Create</Button.Filled>
				<Link to="/">
					<Button.Outlined>Cancel</Button.Outlined>
				</Link>
			</Form>
		</>
	);
};

export default CreateForm;
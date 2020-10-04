import React, { useState } from 'react';
import io from 'socket.io-client';

import { Link, useHistory } from 'react-router-dom';
import Form from '../styles/Form';
import Button from '../styles/Button';

import { Games } from '../types';
import { useStateValue } from '../state';
import { setSocket, setGame, setKey } from '../state/reducer';

//TODO: use variable for socket link
const CreateForm: React.FC<{ game: Games }> = ({ game }) => {
	const [name, setName] = useState('');
	const [, dispatch] = useStateValue();
	const history = useHistory();

	const handleCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const socket = io.connect('http://localhost:3001/');
		socket.emit('create', name, game);

		socket.on('roomKey', (key: string) => {
			dispatch(setSocket(socket));
			dispatch(setGame(game));
			dispatch(setKey(key));
			history.push(`/${game}/${key}`);
		});
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
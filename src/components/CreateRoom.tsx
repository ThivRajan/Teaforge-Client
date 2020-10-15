import React, { useState } from 'react';
import io from 'socket.io-client';

import { Link, useHistory } from 'react-router-dom';
import Message from './misc/Message';
import Form from '../styles/Form';
import Button from '../styles/Button';

import { RoomInfo } from '../types';
import { SERVER_URI } from '../constants';
import { useStateValue } from '../state';
import { setSocket, setName, setGame, setKey, setMessage } from '../state/reducer';

const CreateForm: React.FC<{ gameName: string }> = ({ gameName }) => {
	const [name, setNameField] = useState('');
	const [, dispatch] = useStateValue();
	const history = useHistory();
	history.push(`/create/${gameName}`);

	const handleCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const socket = io.connect(SERVER_URI);
		socket.on('invalid', (message: string) => dispatch(setMessage(message)));
		socket.on('valid', (name: string, key: string, game: RoomInfo) => {
			dispatch(setSocket(socket));
			dispatch(setName(name));
			dispatch(setGame(game));
			dispatch(setKey(key));
			history.push(`/${game.name}/${key}`);
		});
		socket.emit('create', name, gameName);
	};

	return (
		<>
			<h1>Create Room</h1>
			<Form>
				<Message />
				<input placeholder="Name"
					value={name}
					onChange={event => setNameField(event.target.value)}>
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
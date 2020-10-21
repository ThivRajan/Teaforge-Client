import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import { Link, useHistory, useParams } from 'react-router-dom';
import Message from './misc/Message';
import Form from '../styles/Form';
import Button from '../styles/Button';

import { Game, RoomInfo, Color } from '../types';
import { SERVER_URI } from '../constants';
import { useStateValue } from '../state';
import { setSocket, setName, setGame, setKey, setMessage } from '../state/reducer';

const CreateForm: React.FC = () => {
	const [name, setNameField] = useState('');
	const [, dispatch] = useStateValue();
	const history = useHistory();

	interface ParamsType { gameName: Game }
	const { gameName } = useParams<ParamsType>();

	useEffect(() => {
		if (!Object.values(Game).includes(gameName))
			history.push('/');
	});

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
				<Button.Filled onClick={handleCreate} color={Color.Blue}>
					Create
				</Button.Filled>
				<Link to="/">
					<Button.Filled>Cancel</Button.Filled>
				</Link>
			</Form>
		</>
	);
};

export default CreateForm;
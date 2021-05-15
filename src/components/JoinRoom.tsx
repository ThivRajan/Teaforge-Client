import React, { useState } from 'react';
import io from 'socket.io-client';

import { Link, useHistory } from 'react-router-dom';
import Form from '../styles/Form';
import Button from '../styles/Button';
import Message from './misc/Message';
import Loader from './misc/Loader/Loader';

import { RoomInfo, Color } from '../types';
import { SERVER_URI } from '../config';
import { useStateValue } from '../state';
import { setSocket, setName, setGame, setKey, setMessage } from '../state/reducer';

const JoinForm = () => {
	const [loading, setLoading] = useState(false);
	const [name, setNameField] = useState('');
	const [key, setKeyField] = useState('');
	const [, dispatch] = useStateValue();

	const history = useHistory();

	const handleJoin = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const socket = io.connect(SERVER_URI);
		socket.on('invalid', (message: string) => {
			setLoading(false);
			dispatch(setMessage(message));
		});
		socket.on('valid', (name: string, key: string, game: RoomInfo) => {
			setLoading(false);
			dispatch(setSocket(socket));
			dispatch(setName(name));
			dispatch(setGame(game));
			dispatch(setKey(key));
			history.push(`/${game.name}/${key}`);
		});
		socket.emit('join', name, key.toUpperCase());
		setLoading(true);
	};

	return (
		<>
			<h1>Join Room</h1>
			{
				loading
					?
					<Loader />
					:
					<Form>
						<Message />
						<input placeholder="Name"
							value={name}
							onChange={event => setNameField(event.target.value)}
						></input>
						<br />
						<input placeholder="Room Key"
							className={'key'} value={key}
							onChange={event => setKeyField(event.target.value)}
						></input>
						<br />
						<Link to="/lobby">
							<Button.Filled onClick={handleJoin} color={Color.Blue}>
								Join
							</Button.Filled>
						</Link>
						<Link to="/">
							<Button.Filled>Cancel</Button.Filled>
						</Link>
					</Form>
			}
		</>
	);
};

export default JoinForm;
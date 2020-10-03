import React, { useState } from 'react';
import io from 'socket.io-client';

import { Link, useHistory } from 'react-router-dom';
import Form from '../styles/Form';
import Button from '../styles/Button';

import { Games } from '../types';

const CreateForm: React.FC<{ game: Games }> = ({ game }) => {
	const history = useHistory();
	const [name, setName] = useState('');

	const handleCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const socket = io.connect(`http://localhost:3001/${game}`);
		socket.emit('create', name);
		socket.on('roomKey', (room: string) => {
			history.push(`/${game}/${room}`);
		});
		socket.on('players', (players: Array<string>) => {
			console.log('PLAYERS: ', players);
		});
	};

	return (
		<>
			<h1>Create Room</h1>
			<Form>
				<input placeholder="Name"
					value={name} onChange={event => setName(event.target.value)}>
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
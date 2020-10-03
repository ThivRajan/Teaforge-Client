import React from 'react';
import io from 'socket.io-client';

import { Link } from 'react-router-dom';
import Form from '../styles/Form';
import Button from '../styles/Button';

const JoinForm = () => {
	const handleJoin = () => {
		io.connect('http://localhost:3001');
	};

	return (
		<>
			<h1>Join Room</h1>
			<Form>
				<input placeholder="Name"></input>
				<br />
				<input placeholder="Room Key"></input>
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
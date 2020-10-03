import React from 'react';
import io from 'socket.io-client';

import { Link } from 'react-router-dom';
import Form from '../styles/Form';
import Button from '../styles/Button';

import { Games } from '../types';

const CreateForm: React.FC<{ game: Games }> = ({ game }) => {
	const handleJoin = () => {
		io.connect(`http://localhost:3001${game}`);
	};

	return (
		<>
			<h1>Create Room</h1>
			<Form>
				<input placeholder="Name"></input>
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

export default CreateForm;
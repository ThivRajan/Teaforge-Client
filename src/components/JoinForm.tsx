import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../styles/Form';
import { OutlineButton } from '../styles/Button';
import { blue } from '../styles/Global';

const JoinForm = () => {
	return (
		<>
			<h1>Join Room</h1>
			<Form>
				<input placeholder="Name"></input>
				<br />
				<input placeholder="Room Key"></input>
				<br />
				<Link to="/lobby">
					<OutlineButton  >Join</OutlineButton>
				</Link>
				<Link to="/">
					<OutlineButton color={blue}>Cancel</OutlineButton>
				</Link>
			</Form>
		</>

	);
};

export default JoinForm;
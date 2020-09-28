import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../styles/Form';
import Button from '../styles/Button';

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
					<Button.Filled>Join</Button.Filled>
				</Link>
				<Link to="/">
					<Button.Outlined>Cancel</Button.Outlined>
				</Link>
			</Form>
		</>

	);
};

export default JoinForm;
import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../styles/Form';

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
					<button>Join</button>
				</Link>
				<Link to="/">
					<button>Cancel</button>
				</Link>
			</Form>
		</>

	);
};

export default JoinForm;
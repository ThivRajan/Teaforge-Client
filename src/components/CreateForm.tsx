import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../styles/Form';
import { OutlineButton } from '../styles/Button';
import { blue } from '../styles/Global';

const CreateForm = () => {
	return (
		<>
			<Form>
				<h1>Create Room</h1>
				<input placeholder="Name"></input>
				<br />
				<Link to="/lobby">
					<OutlineButton>Join</OutlineButton>
				</Link>
				<Link to="/">
					<OutlineButton color={blue}>Cancel</OutlineButton>
				</Link>
			</Form>
		</>
	);
};

export default CreateForm;
import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../styles/Form';
import { FilledButton } from '../styles/Button';
import { blue } from '../styles/Global';

const CreateForm = () => {
	return (
		<>
			<h1>Create Room</h1>
			<Form>
				<input placeholder="Name"></input>
				<br />
				<Link to="/lobby">
					<FilledButton color={blue}>Join</FilledButton>
				</Link>
				<Link to="/">
					<FilledButton>Cancel</FilledButton>
				</Link>
			</Form>
		</>
	);
};

export default CreateForm;
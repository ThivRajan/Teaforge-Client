import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../styles/Form';
import Button from '../styles/Button';

const CreateForm = () => {
	return (
		<>
			<h1>Create Room</h1>
			<Form>
				<input placeholder="Name"></input>
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

export default CreateForm;
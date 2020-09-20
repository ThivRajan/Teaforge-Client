import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../styles/Form';

const CreateForm = () => {
	return (
		<>
			<Form>
				<h1>Create Room</h1>
				<input placeholder="Name"></input>
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


export default CreateForm;
import React from 'react';
import { Link } from 'react-router-dom';

const CreateForm = () => {
	return (
		<form>
			<h3>Create Room</h3>
			<input placeholder="Name"></input>
			<br />
			<Link to="/lobby">
				<button>Join</button>
			</Link>
			<Link to="/">
				<button>Cancel</button>
			</Link>
		</form>
	);
};


export default CreateForm;
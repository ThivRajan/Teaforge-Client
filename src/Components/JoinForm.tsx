import React from 'react';
import { Link } from 'react-router-dom';

const JoinForm = () => {
	return (
		<form>
			<h3>Join Room</h3>
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
		</form>
	);
};

export default JoinForm;
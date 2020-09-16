import React from 'react';
import { Link } from 'react-router-dom';

const RoomLobby = () => {
	return (
		<div>
			<h2>Key: XYZW</h2>
			<p>Need 3 more players to start</p>
			<ol>
				<li>Joe</li>
				<li>Bob</li>
			</ol>
			<Link to="/">
				<button>Leave</button>
			</Link>
			<button>Start</button>
		</div>
	);
};

export default RoomLobby;
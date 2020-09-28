import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Button from '../styles/Button';

const RoomLobby = () => {
	return (
		<div>
			<h1>Lobby</h1>
			<p>Need 3 more players to start</p>
			<PlayerList>
				<li>Joe</li>
				<li>Bob</li>
			</PlayerList>
			<Link to="/">
				<Button.Outlined>Leave</Button.Outlined>
			</Link>
			<Button.Filled>Start</Button.Filled>
		</div>
	);
};

const PlayerList = styled.ol`
	list-style: decimal inside;
	margin-bottom: 20px;
	font-size: 20px;
	font-weight: 300;
`;

export default RoomLobby;
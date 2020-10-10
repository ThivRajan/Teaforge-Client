import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../../state';

//TODO: refactor board to be dynamic in respect to room size
//TODO: considering making constants for the roles
const Resistance = () => {
	const [{ socket, name, game, key },] = useStateValue();
	const [role, setRole] = useState('');
	const [missionBoard, setMissionBoard] = useState<number[]>([]);

	const history = useHistory();

	//TODO: style the role names
	useEffect(() => {
		if (game && socket && key) {
			socket.on('role', (role: string) => setRole(role));
			socket.on('board', (board: number[]) => setMissionBoard(board));
			socket.emit('ready');
		} else {
			history.push('/join');
		}
	}, [history, socket, key, game]);

	if (!game || !name || !key || !socket) {
		return <>...Loading</>;
	}

	return (
		<div>
			<h1>Role: {role}</h1>
			{
				missionBoard.map(playerCount =>
					<MissionCounter key={playerCount}>{playerCount}</MissionCounter>)
			}
		</div>
	);
};

const MissionCounter = styled.div`
	border-radius: 5px;
`;

export default Resistance;
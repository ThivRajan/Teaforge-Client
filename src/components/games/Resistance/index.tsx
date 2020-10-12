/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../../state';

import TeamView from './TeamView';

//TODO: refactor board to be dynamic in respect to room size
//TODO: considering making constants for the roles
interface Mission {
	players: number;
	result: 'pass' | 'fail' | '';
}

const Resistance = () => {
	const [{ socket, name, game, key },] = useStateValue();
	const [role, setRole] = useState('');
	const [missions, setMission] = useState<Mission[]>([]);
	const [phase, setPhase] = useState('');

	const [leader, setLeader] = useState('');

	const history = useHistory();

	//TODO: style the role names
	useEffect(() => {
		if (game && socket && key) {
			socket.on('role', (role: string) => setRole(role));
			socket.on('missions', (missions: Mission[]) => setMission(missions));

			socket.on('teamCreation', () => setPhase('teamCreation'));
			socket.on('teamLeader', (leader: string) => setLeader(leader));

			socket.emit('ready');
		} else {
			history.push('/join');
		}
	}, [history, socket, key, game]);

	if (!game || !name || !key || !socket) {
		return <>...Loading</>;
	}

	//TODO: maybe throw error on default
	const handleView = (phase: string) => {
		switch (phase) {
			case 'teamCreation':
				return <TeamView leader={leader} />;
			default:
				return <></>;
		}
	};

	return (
		<div>
			<h1>Role: {role}</h1>
			<MissionBoard>
				{missions.map((mission, index) =>
					<MissionResult key={index} result={mission.result}>
						{mission.players}
					</MissionResult>)
				}
			</MissionBoard>
			{handleView(phase)}
		</div>
	);
};

const MissionBoard = styled.div`
	display: flex;
	align-items: center;
	margin: 10px;
`;

interface ResultProps {
	result: 'pass' | 'fail' | '';
}
const MissionResult = styled.div<ResultProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	// margin-left: 10px;
	// margin-right: 10px;
	margin: 8px;

	height: 70px;
	width: 70px;
	font-size: 30px;
	
	border-radius: 50%;
	border: 2px solid ${props => props.theme.darkMode ? 'white' : 'black'};
	color: ${props => props.theme.darkMode ? 'white' : 'black'};

	background: ${(props) => {
		if (props.result) return props.result === 'pass' ? 'blue' : 'red';
		return 'none';
	}}
`;

export default Resistance;
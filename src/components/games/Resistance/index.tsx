/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../../state';

import TeamView from './TeamView';
import VoteView from './VoteView';
import Message from '../../misc/Message';

//TODO: refactor board to be dynamic in respect to room size
//TODO: considering making constants for the roles
//TODO: add rules modal to this component

interface Mission {
	numPlayers: number;
	result: 'passed' | 'failed' | '';
}

const Resistance = () => {
	const [{ socket, name, game, key },] = useStateValue();
	const [role, setRole] = useState('');
	const [missions, setMission] = useState<Mission[]>([]);
	const [phase, setPhase] = useState('');

	const [leader, setLeader] = useState('');
	const [team, setTeam] = useState<string[]>([]);

	const history = useHistory();

	//TODO: style the role names
	useEffect(() => {
		if (game && socket && key) {
			socket.on('role', (role: string) => setRole(role));
			socket.on('missions', (missions: Mission[]) => setMission(missions));

			socket.on('teamCreation', () => setPhase('teamCreation'));
			socket.on('teamLeader', (leader: string) => setLeader(leader));
			socket.on('teamUpdate', (team: string[]) => setTeam(team));
			socket.on('teamConfirm', (team: string[]) => {
				setPhase('teamVoting');
				setTeam(team);
			});

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
				return <TeamView leader={leader} team={team} />;
			case 'teamVoting':
				return <VoteView leader={leader} team={team} />;
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
						{mission.numPlayers}
					</MissionResult>)
				}
			</MissionBoard>
			<Message />
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
	result: 'passed' | 'failed' | '';
}
const MissionResult = styled.div<ResultProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 8px;

	height: 70px;
	width: 70px;
	font-size: 30px;
	
	border-radius: 50%;
	border: 2px solid ${props => props.theme.darkMode ? 'white' : 'black'};
	color: ${props => props.theme.darkMode ? 'white' : 'black'};

	background: ${(props) => {
		if (props.result) return props.result === 'passed' ? 'blue' : 'red';
		return 'none';
	}}
`;

export default Resistance;
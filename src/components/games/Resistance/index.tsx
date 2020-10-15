/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../../state';

import TeamView from './TeamView';
import VoteView from './VoteView';
import MissionView from './MissionView';
import Message from '../../misc/Message';

//TODO: add rules modal to this component
//TODO: display transition messages between phases
//TODO: clean up the colours
//TODO: figure out font sizing problems with different devices

interface Mission {
	numPlayers: number;
	result: 'passed' | 'failed' | '';
}

const Resistance = () => {
	const [{ socket, name, key, game },] = useStateValue();
	const [role, setRole] = useState('');
	const [missions, setMission] = useState<Mission[]>([]);
	const [phase, setPhase] = useState('');

	const [leader, setLeader] = useState('');
	const [team, setTeam] = useState<string[]>([]);

	const [winner, setWinner] = useState('');

	const history = useHistory();

	useEffect(() => {
		if (name && game && socket && key) {
			socket.on('role', (role: string) => setRole(role));
			socket.on('missions', (missions: Mission[]) => setMission(missions));

			socket.on('teamCreation', () => setPhase('teamCreation'));
			socket.on('teamLeader', (leader: string) => setLeader(leader));
			socket.on('teamUpdate', (team: string[]) => setTeam(team));
			socket.on('teamConfirm', (team: string[]) => {
				setPhase('teamVoting');
				setTeam(team);
			});

			socket.on('teamApproved', () => setPhase('mission'));
			socket.on('teamRejected', (leader: string) => {
				setPhase('teamCreation');
				setTeam([]);
				setLeader(leader);
			});
			socket.on('gameOver', (winner: string) => {
				setWinner(winner);
			});

			socket.emit('ready');
		} else {
			history.push('/join');
		}
	}, [history, socket, key, game, name]);

	const handleView = (phase: string) => {
		switch (phase) {
			case 'teamCreation':
				return <TeamView leader={leader} team={team} />;
			case 'teamVoting':
				return <VoteView leader={leader} team={team} />;
			case 'mission':
				return <MissionView team={team} />;
			default:
				throw new Error('Invalid phase provided');
		}
	};

	if (winner) {
		const result = role[0] === winner[0] ? 'won' : 'lost';
		return (
			<>
				<h1>You {result}!</h1>
				<h2>{' '} <Role role={winner}>{winner}</Role> won</h2>
			</>
		);
	}

	return (
		<div>
			<h1>Role:{' '}<Role role={role}>{role}</Role></h1>
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

interface RoleProps { role: string }
const Role = styled.span<RoleProps>`
	color: ${props => props.role === 'spies' || props.role === 'spy'
		? 'red'
		: 'blue'};
`;

const MissionBoard = styled.div`
	display: flex;
	align-items: center;
	margin: 10px;
`;

interface ResultProps { result: 'passed' | 'failed' | '' }
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
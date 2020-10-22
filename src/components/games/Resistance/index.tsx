/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../../state';
import { Color } from '../../../types';
import { Role, Votes, MissionResult, Mission } from '../../../types/resistance';

import TeamView from './TeamView';
import VoteView from './VoteView';
import MissionView from './MissionView';
import Message from '../../misc/Message';
import GameModal from '../../misc/InfoModal';
import Transition from './Transition';

import Button from '../../../styles/Button';
import { dark } from '../../../styles/Global';

//TODO: send players to lobby after game ends
//TODO: colors for buttons
//TODO: colors for vote table text
//TODO: colors for mission board
//TODO: recheck all margins (esp for Transition Messages)

const EVENTS = ['role', 'missions', 'teamCreation', 'teamLeader',
	'teamUpdate', 'teamConfirm', 'teamApproved', 'teamRejected',
	'gameOver', 'playerDisconnected', 'transition',
	'update', 'disconnect', 'start'];

const Resistance = () => {
	const [{ socket, name, key, game },] = useStateValue();
	const [role, setRole] = useState<Role | ''>('');
	const [missions, setMission] = useState<Mission[]>([]);
	const [phase, setPhase] = useState('');
	const [transition, setTransition] = useState('');

	const [leader, setLeader] = useState('');
	const [team, setTeam] = useState<string[]>([]);
	const [votes, setVotes] = useState<Votes | null>(null);
	const [winner, setWinner] = useState<Role | ''>('');

	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const openModal = (): void => setModalOpen(true);
	const closeModal = (): void => setModalOpen(false);

	const history = useHistory();

	useEffect(() => {
		if (name && game && socket && key) {
			socket.on('transition', (message: string) => setTransition(message));

			socket.on('role', (role: Role) => setRole(role));
			socket.on('missions', (missions: Mission[]) => setMission(missions));

			socket.on('teamCreation', () => setPhase('teamCreation'));
			socket.on('teamLeader', (leader: string) => setLeader(leader));
			socket.on('teamUpdate', (team: string[]) => setTeam(team));
			socket.on('teamConfirm', (team: string[]) => {
				setPhase('teamVoting');
				setTeam(team);
			});

			socket.on('teamApproved', () => {
				setPhase('mission');
				setVotes(null);
			});
			socket.on('teamRejected', (leader: string, votes: Votes) => {
				console.log('rejected');
				setPhase('teamCreation');
				setTeam([]);
				setLeader(leader);
				setVotes(votes);
			});
			socket.on('gameOver', (winner: Role) => {
				setWinner(winner);
			});

			socket.on('playerDisconnected', () => {
				EVENTS.forEach(event => socket.off(event));
				setTransition('Player has disconnected, you will be sent to the lobby');
				setTimeout(() => history.push(`/${game.name}/${key}`), 2600);
			});

			socket.emit('ready');
		} else {
			history.push('/join');
		}
	}, [history, socket, key, game, name]);

	if (!game || !name || !key || !socket) {
		return <>...Game disconnected please refresh</>;
	}

	const handleView = (phase: string) => {
		switch (phase) {
			case 'teamCreation':
				return <TeamView leader={leader} team={team} votes={votes} />;
			case 'teamVoting':
				return <VoteView leader={leader} team={team} />;
			case 'mission':
				return <MissionView team={team} />;
			default:
				return <>...Loading Game</>;
		}
	};

	if (transition) {
		return <Transition setTransition={setTransition} transition={transition} />;
	}

	if (winner) {
		const result = role[0] === winner[0] ? 'won' : 'lost';
		return (
			<>
				<h1>You {result}!</h1>
				<h2>{' '} <RoleText role={winner}>{winner}</RoleText> won</h2>
			</>
		);
	}

	return (
		<GameContainer>
			<h2>Role:{' '}<RoleText role={role}>{role}</RoleText></h2>
			<MissionBoard>
				{missions.map((mission, index) =>
					<MissionToken key={index} result={mission.result}>
						{mission.numPlayers}
					</MissionToken>)
				}
			</MissionBoard>
			<Message />
			{handleView(phase)}
			<RulesButton onClick={openModal}>Rules</RulesButton>
			<GameModal game={game?.name} modalOpen={modalOpen}
				closeModal={closeModal} inGame={true} />
		</GameContainer>
	);
};

const GameContainer = styled.div`
	margin: 12px;
`;

const RoleText = styled.span<{ role: Role | '' }>`
	color: ${(props) => {
		if (props.role) return props.role === Role.Resistance
			? dark[Color.Blue]
			: dark[Color.Red];
		else return 'none';
	}}
`;

const MissionBoard = styled.div`
	display: flex;
	align-items: center;
`;

const MissionToken = styled.div<{ result: MissionResult | '' }>`
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
		if (props.result) return props.result === 'passed'
			? dark[Color.Blue]
			: dark[Color.Red];
		return 'none';
	}}
`;

const RulesButton = styled(Button.Filled)`
	font-size: 15px;
	padding: 5px;
	width: max-content;

	position: absolute;
	left: 0;
	top: 13px;

	background: ${props => props.theme.darkMode ? 'white' : 'black'};
	color: ${props => props.theme.darkMode ? 'black' : 'white'};
`;

export default Resistance;
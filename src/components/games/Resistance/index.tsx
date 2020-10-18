/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../../state';
import { Votes } from '../../../types';

import TeamView from './TeamView';
import VoteView from './VoteView';
import MissionView from './MissionView';
import Message from '../../misc/Message';
import GameModal from '../../misc/InfoModal';
import Transition from './Transition';

import Button from '../../../styles/Button';

//TODO: clean up the colours
//TODO: tsconfig

interface Mission {
	numPlayers: number;
	result: 'passed' | 'failed' | '';
}

const EVENTS = ['role', 'missions', 'teamCreation', 'teamLeader',
	'teamUpdate', 'teamConfirm', 'teamApproved', 'teamRejected',
	'gameOver', 'playerDisconnected', 'transition',
	'update', 'disconnect', 'start'];

const Resistance = () => {
	const [{ socket, name, key, game },] = useStateValue();
	const [role, setRole] = useState('');
	const [missions, setMission] = useState<Mission[]>([]);
	const [phase, setPhase] = useState('');
	const [transition, setTransition] = useState('');

	const [leader, setLeader] = useState('');
	const [team, setTeam] = useState<string[]>([]);
	const [votes, setVotes] = useState<Votes | null>(null);
	const [winner, setWinner] = useState('');

	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const openModal = (): void => setModalOpen(true);
	const closeModal = (): void => setModalOpen(false);

	const history = useHistory();

	useEffect(() => {
		if (name && game && socket && key) {
			socket.on('transition', (message: string) => setTransition(message));

			socket.on('role', (role: string) => setRole(role));
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
				setPhase('teamCreation');
				setTeam([]);
				setLeader(leader);
				setVotes(votes);
			});
			socket.on('gameOver', (winner: string) => {
				setWinner(winner);
			});

			//TODO: remove all events, not just the one from this game
			socket.on('playerDisconnected', () => {
				EVENTS.forEach(event => socket.off(event));
				setTransition('Player has disconnected, you will be sent to the lobby');
				setTimeout(() => history.push(`/${game.name}/${key}`), 3000);
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
		return <Transition role={role}
			setTransition={setTransition} transition={transition} />;
	}

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
		<GameContainer>
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
			<RulesButton onClick={openModal}>Rules</RulesButton>
			<GameModal game={game?.name} modalOpen={modalOpen}
				closeModal={closeModal} inGame={true} />
		</GameContainer>
	);
};

const GameContainer = styled.div`
	margin: 12px;
`;

interface RoleProps { role: string }
const Role = styled.span<RoleProps>`
	color: ${props => props.role === 'spies' || props.role === 'spy'
		? 'red'
		: 'blue'};
`;

const MissionBoard = styled.div`
	display: flex;
	align-items: center;
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

const RulesButton = styled(Button.Filled)`
	padding: 10px;
	font-size: 20px;
	position: absolute;
	margin: 0 0 10px 0;
	width: 400px;
	left: calc((100% - 400px)/2);
	
	@media only screen and (min-height: 500px) {
		bottom: 10px;
	}
`;

export default Resistance;
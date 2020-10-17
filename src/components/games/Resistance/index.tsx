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

//TODO: style transition messages
//TODO: figure out font sizing problems with different devices
//TODO: fix text margins (specifically on <p> elmeents)
//TODO: clean up the colours
//TODO: option buttons at the end of the game (leave game, new game maybe)

interface Mission {
	numPlayers: number;
	result: 'passed' | 'failed' | '';
}

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

			socket.emit('ready');
		} else {
			history.push('/join');
		}
	}, [history, socket, key, game, name]);

	//TODO: this error shouldn't come up once useParams is used
	if (!game || !name || !key || !socket) {
		throw new Error('Missing information in store');
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
		return <Transition setTransition={setTransition} message={transition} />;
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
		<>
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
		</>
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

/* Required for Rules Button component */
const RulesButton = styled(Button.Filled)`
	padding: 10px;
	font-size: 20px;
	position: absolute;
	left: calc((100% - 430px)/2);
	width: 430px;

	@media only screen and (min-height: 500px) {
		bottom: 10px;
	}
`;

export default Resistance;
import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

import Players from '../../styles/Players';
import { FilledButton } from '../../styles/Button';
import { blue } from '../../styles/Global';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GameDescription: React.FC<{ modalOpen: boolean; closeModal: Function }> =
	({ modalOpen, closeModal }) => {

		return (
			<Container
				isOpen={modalOpen}
				shouldCloseOnOverlayClick={true}
				shouldCloseOnEsc={true}
				onRequestClose={() => closeModal()}
				shouldFocusAfterRender={true}
				shouldReturnFocusAfterClose={true}
				ariaHideApp={false}
			>
				<CloseIcon icon={faTimes} onClick={() => closeModal()} />
				<h1>Resistance</h1>
				<i>Your goal is to either succeed or sabotage the mission</i>
				<div>
					<Link to="/join">
						<FilledButton color={blue}>Join</FilledButton>
					</Link>
					<Link to="/create">
						<FilledButton>Create</FilledButton>
					</Link>
				</div>

				<u>Rules</u>
				<Players players={'5-10 Players'} />
				<p>
					<b>
						Players are allowed to talk at any point in the game, as long
						as they are talking publicly (everyone must know what any one person
						says).
					</b>
				</p>

				<p>
					There are two roles: Resistance or Spies. The Spies win
					if three missions fail, and the Resistance win if three missions
					succeed. Before the game begins, each player will be shown a message
					telling them their role. If you are a spy, then you will also
					be told who the other spies are.
				</p>
				<p>
					1. First, there is the team creation phase, where the team leader
					will decide which players he/she wants on the mission. Note that
					the team leader is rotated every turn (so the leader is always
					a different person until everyone has been the leader).
				</p>
				<p>
					2. Once the leader has selected members, everyone will vote for
					approving the team or not. If there is a majority vote of approval,
					then you&apos;ll move on to the next phase. If there isn&apos;t a
					majority vote, then there will be a different leader and the game
					goes back to the team creation phase.
				</p>
				<p>
					3. Once the team has gotten majority approval, you will move to
					the mission phase. Everyone on the team will get an option to either
					succeed or fail the mission. If there is even a single person who selects
					&quot;fail&quot;, then the entire mission is considered to be a Fail. Once all
					the team members have selected their option, you will be shown the mission
					result (Success or Fail).
				</p>
				<p>
					4. Now #1-3 will repeat until there are 3 successes (Resistance wins)
					or 3 fails (Spies win).
				</p>

				<b>
					Tip: If you are a spy, try to get either yourself or a fellow spy
					to sneak onto the mission and fail it. If you are resistance, then try
					to figure out who the spies are and stop them from going on the mission.
				</b>


			</Container>
		);
	};

const Container = styled(ReactModal)`
	background: #4a4a4a;
	color: white;
	text-align: left;
	border-radius: 3px;
	overflow-y: auto;

	width: 800px;
	max-width: 80%;

	height: max-content;
	max-height: 75%;
	
	position: absolute;
	top: 0; bottom: 0; right: 0; left: 0;
	margin: auto;

	padding: 20px;

	text-align: center;
	display: flex;
	flex-direction: column;

	h1 {
		margin-top: 10px;
	}

	div button {
		max-width: 200px;
	}

	div {
		margin-top: 15px;
	}

	b {
		text-align: left;
	}

	u {
		font-size: 27px;
		text-align: left;
	}

	p {
		margin-top: 0;
		text-align: left;
	}

	span {
		width: max-content;
		margin-bottom: 10px;
	}

	:focus {
		outline: none;
	}
`;

const CloseIcon = styled(FontAwesomeIcon)`
	font-size: 25px;

	:hover {
		filter: brightness(80%);
		cursor: pointer;
	}
`;

export default GameDescription;
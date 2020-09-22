import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import Players from '../styles/Players';
import { FilledButton } from '../styles/Button';
import { blue } from '../styles/Global';

const Container = styled(ReactModal)`
	background: #4a4a4a;
	color: white;
	text-align: left;
	border-radius: 3px;
	overflow-y: auto;

	max-width: 80%;
	max-height: 80%;
	margin: 15% auto;
	padding: 20px;

	text-align: center;
	display: flex;
	flex-direction: column;

	h1 {
		margin: 10px;
	}

	button {
		max-width: 200px;
	}

	div {
		margin-top: 15px;
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
`;

const GameDescription: React.FC<{ modalOpen: boolean; handleClose: Function }> =
	({ modalOpen, handleClose }) => {
		return (
			<Container
				isOpen={modalOpen}
				shouldCloseOnOverlayClick={true}
				onRequestClose={handleClose}
			>
				<h1>Resistance</h1>
				<i>Your goal is to either successfully complete or sabotage a mission</i>
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
					aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
					cupidatat non proident, sunt in culpa qui officia deserunt
					mollit anim id est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
					aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
					cupidatat non proident, sunt in culpa qui officia deserunt
					mollit anim id est laborum.
				</p>
			</Container>
		);
	};

export default GameDescription;
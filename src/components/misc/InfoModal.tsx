/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import InfoContainer from '../../styles/Info';
import Players from '../../styles/Players';
import Button from '../../styles/Button';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Game } from '../../types';
import Resistance from '../rules/Resistance';

//TODO-DONE: modify resistance rules a little, maybe add a tldr,
//maybe make the <i> block the tldr

const InfoModal: React.FC<{
	game: Game;
	modalOpen:
	boolean;
	closeModal: Function;
	inGame: boolean;
}> = ({ game, modalOpen, closeModal, inGame }) => {

	let Goal: React.FC;
	let Rules: React.FC;
	let playerCount: string;

	switch (game) {
		case Game.Resistance:
			Goal = Resistance.Goal;
			Rules = Resistance.Rules;
			playerCount = Resistance.playerCount;
			break;
		default:
			throw Error('Game does not exist');
	}

	const showButtons = () => {
		if (inGame) {
			return <></>;
		}

		return (<div>
			<Link to="/join">
				<Button.Filled>Join</Button.Filled>
			</Link>
			<Link to={`/create/${game}`}>
				<Button.Filled>Create</Button.Filled>
			</Link>
		</div>);
	};

	return (
		<InfoContainer
			isOpen={modalOpen}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
			onRequestClose={() => closeModal()}
			shouldFocusAfterRender={true}
			shouldReturnFocusAfterClose={true}
			ariaHideApp={false}
		>
			<CloseIcon icon={faTimes} onClick={() => closeModal()} />
			<h1>{game}</h1>
			<Goal />
			{showButtons()}
			<u>Rules</u>
			<Players players={playerCount} />
			<Rules />
		</InfoContainer>
	);
};

const CloseIcon = styled(FontAwesomeIcon)`
	font-size: 25px;

	:hover {
		filter: brightness(80%);
		cursor: pointer;
	}
`;

export default InfoModal;
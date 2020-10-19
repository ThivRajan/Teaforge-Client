import React, { useState } from 'react';

import InfoModal from './InfoModal';
import PlayersLabel from '../../styles/PlayersLabel';
import { Card, CardContainer } from '../../styles/Card';

import fist from '../../assets/fist.png';
import { Game } from '../../types';

const GameList = () => {
	return (
		<>
			<CardContainer>
				<GameCard
					game={Game.Resistance} imgSrc={fist}
					description='Successfully complete your missions while 
						spies try to sabotage them.'
					playerCount='5-10 Players'
				/>
			</CardContainer>
		</>
	);
};

const GameCard: React.FC<{ game: Game; imgSrc: string; description: string; playerCount: string }>
	= ({ game, imgSrc, description, playerCount }) => {

		const [modalOpen, setModalOpen] = useState<boolean>(false);
		const openModal = (): void => setModalOpen(true);
		const closeModal = (): void => setModalOpen(false);

		return (
			<>
				<Card onClick={openModal}>
					<img src={imgSrc} alt="logo" />
					<div>
						<h2>{game}</h2>
						<p>{description}</p>
						<PlayersLabel players={playerCount} />
					</div>
				</Card>
				<InfoModal game={game} modalOpen={modalOpen}
					closeModal={closeModal} inGame={false} />
			</>
		);
	};

export default GameList;


import React, { useState } from 'react';

import Description from './GameInfo';
import Players from '../../styles/Players';
import { GameCard, GamesContainer } from '../../styles/GameCard';

import fist from '../../assets/fist.png';
import { Games } from '../../types';


const GameList = () => {
	return (
		<>
			<GamesContainer>
				<Game
					game={Games.Resistance} imgSrc={fist}
					description='Successfully complete your missions while 
						spies try to sabotage them.'
					playerCount='5-10 Players'
				/>
			</GamesContainer>
		</>
	);

};

const Game: React.FC<{ game: Games; imgSrc: string; description: string; playerCount: string }>
	= ({ game, imgSrc, description, playerCount }) => {

		const [modalOpen, setModalOpen] = useState<boolean>(false);
		const openModal = (): void => setModalOpen(true);
		const closeModal = (): void => setModalOpen(false);

		return (
			<>
				<GameCard onClick={openModal}>
					<img src={imgSrc} alt="logo" />
					<div>
						<h2>{game}</h2>
						<p>{description}</p>
						<Players players={playerCount} />
					</div>
				</GameCard>
				<Description game={game} modalOpen={modalOpen} closeModal={closeModal} />
			</>
		);
	};

export default GameList;


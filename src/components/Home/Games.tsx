import React, { useState } from 'react';

import Description from './GameInfo';
import Players from '../../styles/Players';
import { GameCard, GamesContainer } from '../../styles/GameCard';

import fist from '../../assets/fist.png';

const Games = () => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const openModal = (): void => setModalOpen(true);
	const closeModal = (): void => setModalOpen(false);

	return (
		<>
			<GamesContainer>
				<GameCard onClick={openModal}>
					<img src={fist} alt="resistance logo" />
					<div>
						<h2>Resistance</h2>
						<p>
							Successfully complete your missions
							while spies try to sabotage them.
						</p>
						<Players players={'5-10 players'} />
					</div>
				</GameCard>
			</GamesContainer>
			<Description modalOpen={modalOpen} closeModal={closeModal} />
		</>
	);

};

export default Games;


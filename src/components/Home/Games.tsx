import React, { useState } from 'react';

import Description from './Description';
import Players from '../../styles/Players';
import { Card, CardContainer } from '../../styles/Card';

import fist from '../../assets/fist.png';

const Games = () => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const openModal = (): void => setModalOpen(true);
	const closeModal = (): void => setModalOpen(false);

	return (
		<>
			<CardContainer>
				<Card onClick={openModal}>
					<img src={fist} alt="resistance logo" />
					<div>
						<h2>Resistance</h2>
						<p>
							Successfully complete your missions
							while spies try to sabotage them.
						</p>
						<Players players={'5-10 players'} />
					</div>
				</Card>
			</CardContainer>
			<Description modalOpen={modalOpen} closeModal={closeModal} />
		</>
	);

};

export default Games;


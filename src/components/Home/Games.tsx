import React, { useState } from 'react';
import styled from 'styled-components';

import Description from './Description';
import Players from '../../styles/Players';

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

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
`;

const Card = styled.div`
	color: white;
	background-color: #4a4a4a;
	
	border-radius: 3px;
	margin: 15px;
	margin-top: 0;

	text-decoration: none;

	display: grid;
	grid-template-columns: 4fr 11fr;
	transition: box-shadow 200ms;
	
	:hover {
		box-shadow: 0px 5px 13px 1px #707070;
		cursor: pointer;
	} 
	
	h2 {
        margin: 0;
		font-size: 30px;
		font-weight: bold;
		font-family: Kreon, serif;
		color: white;
    }

    p {
		margin: 0;
		font-size: 17px;
		font-family: 'Signika', sans-serif;
		font-weight: 300;

    }
	
	img {
        grid-column: 1;
        grid-row: 1;
        
		width: 90%;
		margin: auto;
		padding-left: 10px;
	}
	
	div {
        grid-column: 2;
        grid-row: 1;

        text-align: left;

        padding-top: 10px;
        padding-bottom: 15px;
		padding-left: 10px;
    }
`;

export default Games;


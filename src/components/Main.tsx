import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import fist from '../assets/fist.png';

const Button = styled.button`
	margin-bottom: 1.2rem;
	margin-right: 0.5rem;
	margin-left: 0.5rem;

	padding-bottom: 5px;
	padding-top 7px;

	font-size: 1rem;
	background: white;
	color: #fc3030;
	border: 2px solid #fc3030; 
	border-radius: 5px;

	transition: background 300ms;

	:hover {
		background: #fc3030;
		color: white;
		cursor: pointer;
	}

	:focus {
		outline: none;
	}
`;

const Main = () => {
	return (
		<>
			<h1>Teaforge</h1>
			<p>Play classic games of deceipt with your friends</p>
			<Link to="/join">
				<Button>Join Game</Button>
			</Link>
			<Link to="/create">
				<Button>Create Game</Button>
			</Link>
			<GameList />
		</>
	);

};

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
`;

const Card = styled.a`
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
        box-shadow: 0px 0px 15px 5px #707070;
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

    span {
        padding: 5px;
        background: grey;
        color: white;
		border-radius: 3px;
		font-size: 18px;
		
        float: left;
		margin-top: 10px;

		font-family: 'Signika', sans-serif;
		font-weight: 300;

	}
	
	img {
        grid-column: 1;
        grid-row: 1;
        
		width: 90%;
		padding-left: 10px;
		margin: auto;
	}
	
	div {
        grid-column: 2;
        grid-row: 1;

        text-align: left;
        // height: 100%;

        padding-top: 10px;
        padding-bottom: 15px;
		padding-left: 10px;
    }
`;

const GameList = () => (
	<CardContainer>
		<Card href="resistance">
			<img src={fist} alt="resistance logo" />
			<div>
				<h2>Resistance</h2>
				<p>
					Successfully complete your missions
					while spies try to sabotage them.
				</p>
				<span>5-10 Players</span>
			</div>
		</Card>
	</CardContainer>
);

export default Main;
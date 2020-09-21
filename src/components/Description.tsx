import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Players from '../styles/Players';
import { FilledButton } from '../styles/Button';
import { blue } from '../styles/Global';

const Container = styled.div`
	background: #4a4a4a;
	color: white;
	text-align: left;
	border-radius: 3px;

	margin: 25% 15px;
	padding: 10px;

	div {
		display: grid;
		grid-template-columns: repeat(3, 1fr) 2fr 2fr;
		margin-bottom: 15px;


		h1 {
			grid-column: 1/4;
			grid-row: 1;
			margin: 0;
			// font-family: signika, san-serif;
		}

		button {
			width: 90%;
			height: max-content;
			margin: auto 10px;
			grid-row: 1;
		}

		i {
			grid-column: 1/6;
			grid-row: 2;
			font-size: 20px;
			padding-top: 5px;
		}

		span {
			grid-column: 1/4;
			grid-row: 3;
			width: max-content;
		}
	}

	u {
		font-size: 27px;
	}

	p {
		margin-top: 0;
	}

`;

const GameDescription = () => {
	return (
		<Container>
			<div>
				<h1>Resistance</h1>
				<Link to="/join">
					<FilledButton color={blue}>Join</FilledButton>
				</Link>
				<Link to="/create">
					<FilledButton>Create</FilledButton>
				</Link>

				<i>Your goal is to successfully complete or sabotage a mission</i>
				<Players players={'5-10 players'} />
			</div>

			<u>Rules</u>
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
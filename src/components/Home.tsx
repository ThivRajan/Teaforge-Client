import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { dark, light } from '../styles/Global';
import Button from '../styles/Button';
import GameList from './misc/GameList';

import { Color } from '../types';

const Home = () => {
	const history = useHistory();
	useEffect(() => history.push('/'));

	return (
		<>
			<h1>Teaforge Games</h1>
			<SubHeader>Play social deduction games online</SubHeader>
			<Link to="/join">
				<Button.Filled color={Color.Blue}>Join Game</Button.Filled>
			</Link>
			<GameList />
			<Footer>
				Made by {' '}
				<a href="https://thivagar.com"
					target='_blank' rel='noopener noreferrer'>
					Thivagar Nadarajan
				</a>
				<div>
					Please send feedback or questions to {' '}
					<a href="mailto: thiv.nadarajan@gmail.com">thiv.nadarajan@gmail.com</a>
				</div>

			</Footer>
		</>
	);
};

const SubHeader = styled.p`
	font-size: 23px;
	margin-top: 0;
`;

const Footer = styled.div`
	padding: 14px;
	width: calc(100% - 28px);
	font-size: 19px;

	@media only screen and (min-height: 475px) {
		position: absolute;
		bottom: 0;
		left: 0;	
	}

	a {
		text-decoration: none;
		color: ${dark[Color.Blue]};

		@media (hover: hover) {
			:hover {
				color: ${light[Color.Blue]};
			}
		}
	}

	div {
		font-size: 15px;
	}
`;


export default Home;
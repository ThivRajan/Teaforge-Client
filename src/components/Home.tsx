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
			<h1>Teaforge</h1>
			<SubHeader>Tabletop games of deceipt and deduction</SubHeader>
			<Link to="/join">
				<Button.Filled color={Color.Blue}>Join Game</Button.Filled>
			</Link>
			<GameList />
			<Footer>
				Made by {' '}
				<a href="https://github.com/ThivagarNadarajan"
					target='_blank' rel='noopener noreferrer'>
					Thivagar Nadarajan
				</a>
			</Footer>
		</>
	);
};

const SubHeader = styled.p`
	font-size: 23px;
	margin-top: 0;
`;

const Footer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;

	padding: 14px;
	width: calc(100% - 28px);
	
	background: black;
	color: ${light[Color.Red]};

	a {
		text-decoration: none;
		padding: 5px;
		color: ${dark[Color.Red]};

		transition: color 100ms;

		@media (hover: hover) {
			:hover {
				color: #b03737;
			}
		}
	}
`;


export default Home;
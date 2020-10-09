import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../styles/Button';
import GameList from './misc/GameList';

const SubHeader = styled.p`
	font-size: 23px;
	margin-top: 0;
`;

const Home = () => {
	return (
		<>
			<h1>Teaforge</h1>
			<SubHeader>Play classic games of deceipt online</SubHeader>
			<Link to="/join">
				<Button.Outlined>Join Game</Button.Outlined>
			</Link>
			<GameList />
		</>
	);
};

export default Home;
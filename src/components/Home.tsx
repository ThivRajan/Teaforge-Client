import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../styles/Button';
import GameList from './misc/GameList';

import { Color } from '../types';

//TODO: add github link here or somethin
const SubHeader = styled.p`
	font-size: 23px;
	margin-top: 0;
`;

const Home = () => {
	const history = useHistory();
	useEffect(() => history.push('/'));

	return (
		<>
			<h1>Teaforge</h1>
			<SubHeader>Play classic games of deceipt online</SubHeader>
			<Link to="/join">
				<Button.Filled color={Color.Blue}>Join Game</Button.Filled>
			</Link>
			<GameList />
		</>
	);
};

export default Home;
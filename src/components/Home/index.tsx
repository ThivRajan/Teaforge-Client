import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { OutlineButton } from '../../styles/Button';
import Games from './Games';

const SubHeader = styled.p`
	font-size: 23px;
`;

const Main = () => {
	return (
		<>
			<h1>Teaforge</h1>
			<SubHeader>Play classic games of deceipt online</SubHeader>
			<Link to="/join">
				<OutlineButton>Join Game</OutlineButton>
			</Link>
			<Games />
		</>
	);
};

export default Main;
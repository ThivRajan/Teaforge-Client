import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../Header';
import { OutlineButton } from '../../styles/Button';
import Games from './Games';

const SubHeader = styled.p`
	font-size: 23px;
	margin-top: 0;
`;

const Main = () => {
	return (
		<>
			<Header title={'Teaforge'} />
			<SubHeader>Play classic games of deceipt online</SubHeader>
			<Link to="/join">
				<OutlineButton>Join Game</OutlineButton>
			</Link>
			<Games />
		</>
	);
};

export default Main;
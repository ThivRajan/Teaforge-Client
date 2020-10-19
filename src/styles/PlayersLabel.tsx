import React from 'react';
import styled from 'styled-components';

import { colors } from './Global';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.span`
	padding: 5px;
	background: ${props => props.theme.darkMode ? colors.lightRed : colors.red};
	color: white;
	border-radius: 3px;

	float: left;
	margin-top: 10px;

	font-size: 18px;
	font-family: 'Signika', sans-serif;
	font-weight: 300;
`;

const PlayersLabel: React.FC<{ players: string }> = ({ players }) => (
	<Container>
		<FontAwesomeIcon icon={faUser} /> {players}
	</Container>
);

export default PlayersLabel;
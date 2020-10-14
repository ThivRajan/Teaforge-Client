import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/Global';

//TODO: refine the error or something
const PlayerList: React.FC<{ players: string[] | undefined; team: string[] }> = ({ players, team }) => {
	if (players === undefined) {
		throw Error('Invalid game instance');
	}

	return (
		<List>
			{
				players.map(
					player => {
						const chosen = team.includes(player) ? true : false;
						return (
							<Player key={player} chosen={chosen}>
								{player}
							</Player>
						);
					}
				)
			}
		</List>
	);
};

interface PlayerProps {
	chosen: boolean;
}
export const Player = styled.li<PlayerProps>`
	list-style-type: none;
	background: ${props => {
		if (props.theme.darkMode) {
			if (props.chosen) return colors.lightRed;
			return colors.fg;
		} else {
			if (props.chosen) return colors.red;
			else return colors.bg;
		}
	}};
	color: white;
	padding: 8px;
	margin-bottom: 8px;
	border-radius: 3px;
`;

export const PlayerOption = styled(Player)`
	:hover {
		background: ${props => props.theme.darkMode ? colors.lightRed : colors.red};
		filter: ${props => props.chosen ? 'brightness(80%)' : 'none'};
		cursor: pointer;
	}
`;

export const List = styled.div`
	margin: auto;
	width: 300px;

	button {
		margin:auto;
		width: 100%;
		font-size: 20px;
	}
`;

export default PlayerList;

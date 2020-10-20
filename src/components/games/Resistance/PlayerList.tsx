import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/Global';
// import 

const PlayerList: React.FC<{ players: string[] | undefined; team: string[] }> = ({ players, team }) => {
	return (
		<List>
			{
				players?.map(
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

export const Player = styled.li<{ chosen: boolean }>`
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
	@media (hover: hover) {
		:hover {
			filter: ${props => props.chosen ? 'brightness(80%)' : 'none'};
			cursor: pointer;
		}
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

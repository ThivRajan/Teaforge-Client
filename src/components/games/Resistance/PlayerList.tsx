import React from 'react';
import styled from 'styled-components';

import { dark, light } from '../../../styles/Global';
import { Color } from '../../../types';

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
		if (props.chosen) return props.theme.darkMode ? dark[Color.Blue] : light[Color.Blue];
		return props.theme.darkMode ? dark[Color.FG] : light[Color.FG];
	}};
	color: white;
	padding: 8px;
	margin-bottom: 8px;
	border-radius: 3px;
`;

export const PlayerOption = styled(Player)`
	@media (hover: hover) {
		:hover {
			cursor: pointer;
		}
	}
`;

export const List = styled.div`
	margin: auto;
	width: 300px;

	button {
		margin: auto;
		margin-top: 10px;
		width: 100%;
		font-size: 20px;
	}
`;

export default PlayerList;

import React from 'react';
import { useStateValue } from '../../../state';
import styled from 'styled-components';

import { colors } from '../../../styles/Global';
import Button from '../../../styles/Button';

//TODO: text-transform: none
//TODO: style player list based on who's chosen
//TODO: fix role changing on click of player
const TeamView: React.FC<{ leader: string; team: string[] }> = ({ leader, team }) => {
	const [{ socket, name, game },] = useStateValue();

	if (leader === name) {
		return (
			<div>
				<h3>You&apos;re the leader! Choose who will go on the mission!</h3>
				<PlayerList>
					{
						game?.players.map(
							player => {
								let action = 'choose';
								let chosen = false;
								if (team.includes(player)) {
									action = 'remove';
									chosen = true;
								}
								return (
									<PlayerOption key={player} chosen={chosen}
										onClick={() =>
											socket?.emit('teamUpdate', action, player)}>
										{player}
									</PlayerOption>
								);
							}
						)
					}
					<Button.Outlined onClick={() =>
						socket?.emit('teamConfirm')}>
						Confirm Team
					</Button.Outlined>
				</PlayerList>
			</div>
		);
	} else {
		return (
			<div>
				<p>
					Team leader is {leader}, they are choosing who will go on the mission.
				</p>
				<PlayerList>
					{
						game?.players.map(
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
				</PlayerList>
			</div>
		);
	}
};

interface PlayerProps {
	chosen: boolean;
}
const Player = styled.li<PlayerProps>`
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

const PlayerOption = styled(Player)`
	:hover {
		background: ${props => props.theme.darkMode ? colors.lightRed : colors.red};
		filter: ${props => props.chosen ? 'brightness(80%)' : 'none'};
		cursor: pointer;
	}
`;

const PlayerList = styled.div`
	margin: auto;
	width: 300px;

	button {
		margin:auto;
		margin-top: 5px;
		width: 100%;
		font-size: 20px;
	}
`;

export default TeamView;
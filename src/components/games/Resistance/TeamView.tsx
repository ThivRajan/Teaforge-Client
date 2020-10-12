import React from 'react';
import { useStateValue } from '../../../state';
import styled from 'styled-components';

import { colors } from '../../../styles/Global';

//TODO: text-transform: none
//TODO: style player list based on who's chosen
const TeamView: React.FC<{ leader: string }> = ({ leader }) => {
	const [{ socket, name, game },] = useStateValue();

	if (leader === name) {
		return (
			<div>
				<h3>You&apos;re the leader! Choose who will go on the mission!</h3>
				<PlayerList>
					{
						game?.players.map(
							player =>
								<Player key={player}
									onClick={() => socket?.emit('choosePlayer', player)}>
									{player}
								</Player>
						)
					}
				</PlayerList>

				<button>Confirm Team</button>
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
							player => <PlayerOption key={player}>{player}</PlayerOption>)
					}
				</PlayerList>
			</div>
		);
	}
};

const Player = styled.li`
	list-style-type: none;
	background: ${props => props.theme.darkMode ? colors.fg : colors.bg};
	color: white;
	padding: 8px;
	margin-bottom: 8px;
	border-radius: 3px;
`;

const PlayerOption = styled(Player)`
	transition: background 100ms;

	:hover {
		background: ${props => props.theme.darkMode ? colors.lightRed : colors.red};
	}
`;

const PlayerList = styled.div`
	margin: auto;
	width: 300px;
`;

export default TeamView;
import React from 'react';

import { useStateValue } from '../../../state';

import PlayerList, { List, PlayerOption } from './PlayerList';
import Button from '../../../styles/Button';

//TODO: text-transform: none
const TeamView: React.FC<{ leader: string; team: string[] }> = ({ leader, team }) => {
	const [{ socket, name, game },] = useStateValue();

	if (leader === name) {
		return (
			<div>
				<h3>You&apos;re the leader! Choose who will go on the mission!</h3>
				<List>
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
				</List>
			</div>
		);
	} else {
		return (
			<div>
				<p>
					Team leader is {leader}, they are choosing who will go on the mission.
				</p>
				<PlayerList team={team} players={game?.players} />
			</div>
		);
	}
};

export default TeamView;
import React from 'react';

import { useStateValue } from '../../../state';
import { Color } from '../../../types';
import { Votes } from '../../../types/resistance';


import PlayerList, { List, PlayerOption } from './PlayerList';
import VoteResults from './VoteResults';
import Button from '../../../styles/Button';

const TeamView: React.FC<{ leader: string; team: string[]; votes: Votes | null }>
	= ({ leader, team, votes }) => {
		const [{ socket, name, game },] = useStateValue();

		const showVotes = () => {
			if (votes) return (<VoteResults votes={votes} />);
			return <></>;
		};

		if (leader === name) {
			return (
				<div>
					{showVotes()}
					<p>You&apos;re the leader! Choose who will go on the mission!</p>
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
						<Button.Filled onClick={() =>
							socket?.emit('teamConfirm')} color={Color.Blue}>
							Confirm Team
						</Button.Filled>
					</List>
				</div>
			);
		} else {
			return (
				<div>
					{showVotes()}
					<p>
						Team leader is {leader}, they are choosing who will go on the mission.
					</p>
					<PlayerList team={team} players={game?.players} />
				</div>
			);
		}
	};

export default TeamView;
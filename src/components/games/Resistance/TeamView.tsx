import React from 'react';
import styled from 'styled-components';

import { useStateValue } from '../../../state';
import { Votes } from '../../../types';

import PlayerList, { List, PlayerOption } from './PlayerList';
import Button from '../../../styles/Button';

const TeamView: React.FC<{ leader: string; team: string[]; votes: Votes | null }>
	= ({ leader, team, votes }) => {
		const [{ socket, name, game },] = useStateValue();

		const showVotes = () => {
			if (votes) {
				return (
					<>
						<h4>Old Voting Results</h4>
						<VoteTable>
							<p>Approvals</p>
							{votes.approve.map(p => <li key={p}>{p}</li>)}
						</VoteTable>
						<VoteTable>
							<p>Rejections</p>
							{votes.reject.map(p => <li key={p}>{p}</li>)}
						</VoteTable>
					</>
				);
			}
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
					{showVotes()}
					<p>
						Team leader is {leader}, they are choosing who will go on the mission.
					</p>
					<PlayerList team={team} players={game?.players} />
				</div>
			);
		}
	};

const VoteTable = styled.div`

`;

export default TeamView;
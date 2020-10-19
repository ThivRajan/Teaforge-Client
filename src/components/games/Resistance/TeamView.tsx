import React from 'react';
import styled from 'styled-components';

import { useStateValue } from '../../../state';
import { Votes } from '../../../types/resistance';

import PlayerList, { List, PlayerOption } from './PlayerList';
import Button from '../../../styles/Button';

const TeamView: React.FC<{ leader: string; team: string[]; votes: Votes | null }>
	= ({ leader, team, votes }) => {
		const [{ socket, name, game },] = useStateValue();

		const showVotes = () => {
			if (votes) {
				return (
					<div>
						<VoteHeader>Voting Results</VoteHeader>
						<VoteTable>
							<div className={'approved'}>
								<p>Approved</p>
								{votes.approve.map(v => <li key={v}>{v}</li>)}
							</div>
							<div className={'rejected'}>
								<p>Rejected</p>
								{votes.reject.map(v => <li key={v}>{v}</li>)}
							</div>
						</VoteTable>
					</div>
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

const VoteHeader = styled.h3`
	margin-bottom: 0;
	font-size: 30px;
`;

const VoteTable = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 250px;
	margin: auto;
	
	p {
		margin-bottom: 5px;
		font-weight: 600;
		font-size: 25px;
	}

	li {
		list-style: none;
		margin-bottom: 3px;
		font-weight: 300;
		font-size: 20px;
	}

	.approved li {
		color: red;
	}

	.rejected li {
		color: green;
	}
`;

export default TeamView;
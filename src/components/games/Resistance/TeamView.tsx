import React from 'react';
import { useStateValue } from '../../../state';

//TODO: text-transform: none
const TeamView: React.FC<{ leader: string }> = ({ leader }) => {
	const [{ name, game },] = useStateValue();

	if (leader === name) {
		return (
			<div>
				<h3>You&apos;re the leader! Choose who will go on the mission!</h3>
				{game?.players.map(player => <li>{player}</li>)}
				<button>Confirm Team</button>
			</div>
		);
	} else {
		return (
			<div>
				<h3>
					Team leader is {leader}, they are choosing who will go on the mission.
				</h3>
				{game?.players.map(player => <li>{player}</li>)}
			</div>
		);
	}

};

export default TeamView;
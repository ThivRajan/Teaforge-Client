import React from 'react';

import { useStateValue } from '../../../state';

import PlayerList from './PlayerList';
import Button from '../../../styles/Button';

//TODO: text-transform: none
const VoteView: React.FC<{ leader: string; team: string[] }> = ({ leader, team }) => {
	const [{ socket, game },] = useStateValue();

	return (
		<div>
			<p>
				{leader} has chosen this team. Do you approve it?
			</p>
			<PlayerList team={team} players={game?.players} />
			<Button.Filled onClick={() => socket?.emit('approve')}>Approve</Button.Filled>
			<Button.Filled onClick={() => socket?.emit('reject')}>Reject</Button.Filled>
		</div>
	);

};

export default VoteView;
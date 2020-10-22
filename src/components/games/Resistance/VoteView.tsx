import React, { useState } from 'react';

import PlayerList from './PlayerList';
import Button from '../../../styles/Button';

import { Color } from '../../../types';
import { useStateValue } from '../../../state';

const VoteView: React.FC<{ leader: string; team: string[] }> = ({ leader, team }) => {
	const [{ socket, game, name },] = useStateValue();
	const [submitted, setSubmitted] = useState(false);

	const showButtons = () => {
		if (submitted) return <p>You have voted. Waiting on the other players.</p>;
		return (
			<div style={{ paddingTop: '10px' }}>
				<Button.Filled onClick={() => {
					socket?.emit('vote', 'approve', name);
					setSubmitted(true);
				}} color={Color.Blue}>
					Approve
				</Button.Filled>

				<Button.Filled onClick={() => {
					socket?.emit('vote', 'reject', name);
					setSubmitted(true);
				}}>
					Reject
				</Button.Filled>
			</div>
		);

	};

	return (
		<div>
			<p>{leader} has chosen this team. Will you approve it?</p>
			<PlayerList team={team} players={game?.players} />
			{showButtons()}
		</div>
	);
};

export default VoteView;
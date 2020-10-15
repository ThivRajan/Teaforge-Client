import React, { useState } from 'react';

import { useStateValue } from '../../../state';

import PlayerList from './PlayerList';
import Button from '../../../styles/Button';

const VoteView: React.FC<{ leader: string; team: string[] }> = ({ leader, team }) => {
	const [{ socket, game },] = useStateValue();
	const [submitted, setSubmitted] = useState(false);

	const showButtons = () => {
		if (submitted) return <p>You have voted. Waiting on the other players.</p>;
		else {
			return (
				<>
					<Button.Filled onClick={() => {
						socket?.emit('vote', 'approve');
						setSubmitted(true);
					}}>
						Approve
					</Button.Filled>

					<Button.Filled onClick={() => {
						socket?.emit('vote', 'reject');
						setSubmitted(true);
					}}>
						Reject
					</Button.Filled>
				</>
			);
		}
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
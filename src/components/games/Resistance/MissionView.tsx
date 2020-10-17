import React, { useState } from 'react';

import { useStateValue } from '../../../state';

import Button from '../../../styles/Button';

const MissionView: React.FC<{ team: string[] }> = ({ team }) => {
	const [{ socket, name },] = useStateValue();
	const [submitted, setSubmitted] = useState(false);

	if (team.includes(name)) {
		if (submitted) return <p>You have went on the mission. Waiting for your team.</p>;
		else return (
			<div>
				<p>You&apos;re on the mission. Will you pass or fail it?</p>
				<Button.Filled onClick={() => {
					socket?.emit('mission', 'pass');
					setSubmitted(true);
				}}>
					Pass
				</Button.Filled>

				<Button.Filled onClick={() => {
					socket?.emit('mission', 'fail');
					setSubmitted(true);
				}}>
					Fail
				</Button.Filled>
			</div>
		);
	} else {
		const commaList = team.join(', ');
		return (
			<p>{commaList} are on the mission, please wait for them to finish.</p>
		);
	}

};

export default MissionView;
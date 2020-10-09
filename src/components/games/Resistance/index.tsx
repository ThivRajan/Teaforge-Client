import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../../state';

//TODO: when comonent renders, emit 'ready' to server
const Resistance = () => {
	const [{ socket, name, game, key },] = useStateValue();
	const history = useHistory();

	useEffect(() => {
		if (game && socket && key) {
			socket.emit('ready');
		} else {
			history.push('/join');
		}
	}, [history, socket, key, game]);

	if (!game || !name || !key || !socket) {
		// return <>...Loading</>;
		history.push('/join');
	}

	return <h1>Resistance</h1>;
};

export default Resistance;
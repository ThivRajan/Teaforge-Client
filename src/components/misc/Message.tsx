import React from 'react';
import styled from 'styled-components';

import { useStateValue } from '../../state';
import { setMessage } from '../../state/reducer';

import { dark } from '../../styles/Global';
import { Color } from '../../types';

const Message = () => {
	const [{ message }, dispatch] = useStateValue();

	if (message) {
		setTimeout(() => {
			dispatch(setMessage(''));
		}, 3000);
		return <StyledMessage>{message}</StyledMessage>;
	}
	else return null;
};

const StyledMessage = styled.div`
	color: ${dark[Color.Red]};
	font-size: 20px;
	margin: 10px;
`;

export default Message;
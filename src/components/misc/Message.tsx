import React from 'react';
import styled from 'styled-components';

import { useStateValue } from '../../state';
import { setMessage } from '../../state/reducer';

import { colors } from '../../styles/Global';

const Message = () => {
	const [{ message }, dispatch] = useStateValue();

	if (message) {
		setTimeout(() => {
			dispatch(setMessage(''));
		}, 1500);
		return <StyledMessage>{message}</StyledMessage>;
	}
	else return null;
};

const StyledMessage = styled.div`
	color: ${colors.red};
	font-size: 20px;
`;

export default Message;
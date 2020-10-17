import React from 'react';
import styled from 'styled-components';

const Transition: React.FC<{ message: string; setTransition: Function }> =
	({ message, setTransition }) => {
		setTimeout(() => setTransition(''), 3500);
		return <Message>{message}</Message>;
	};

const Message = styled.p`
	margin-top: 45vh;
	font-size: 30px;
`;


export default Transition;
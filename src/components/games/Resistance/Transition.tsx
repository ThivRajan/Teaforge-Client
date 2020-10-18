import React from 'react';
import styled from 'styled-components';

const Transition: React.FC<{ role: string; transition: string; setTransition: Function }> =
	({ role, transition, setTransition }) => {
		setTimeout(() => setTransition(''), 3000);
		return <Message role={role}>{transition}</Message>;
	};

interface MessageProps { role: string }
const Message = styled.p<MessageProps>`
	margin-top: 45vh;
	font-size: 30px;
	color: ${props => props.role === 'spy' ? 'red' : 'blue'}
`;


export default Transition;
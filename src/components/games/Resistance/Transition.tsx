import React from 'react';
import styled from 'styled-components';

const Transition: React.FC<{ transition: string; setTransition: Function }> =
	({ transition, setTransition }) => {
		setTimeout(() => setTransition(''), 2500);
		return <Message>{transition}</Message>;
	};

const Message = styled.p`
	margin: 40vh 15px;
	font-size: 30px;
`;


export default Transition;
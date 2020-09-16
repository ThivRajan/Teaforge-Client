import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	border: 1px solid;
`;

const GameDescription = () => {
	return (
		<Card>
			<h3>Resistance</h3>
			<p>5-10 Players</p>
			<p>--Description--</p>
			<p>--Rules--</p>
		</Card>
	);
};

export default GameDescription;
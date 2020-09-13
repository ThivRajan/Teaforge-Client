import React from 'react';
import styled from 'styled-components';

const Center = styled.div`
	text-align: center;
`;

const Title = styled.h1`
	color: red;
`;

function App() {
	return (
		<Center>
			<Title>Teaforge</Title>
			<p>Classic board games of deceipt</p>
			<button>Join Game</button>
		</Center>
	);
}

export default App;

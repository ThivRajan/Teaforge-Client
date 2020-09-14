import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
	margin: 1rem 0;
`;

const Card = styled.div`
	border: 1px solid;
	width: 50vw;
	margin:auto;
`;

const Title = styled.h1`
	color: red;
`;

const Home = () => {
	return (
		<div>
			<Title>Teaforge</Title>
			<p>Classic board games of deceipt</p>
			<Link to="/join">
				<Button>Join Game</Button>
			</Link>
			<Card>
				<h3>Resistance</h3>
				<p>--Description--</p>
			</Card>
		</div>
	);

};

export default Home;
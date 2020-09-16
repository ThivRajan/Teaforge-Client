import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import logo from '../assets/fist.png';

const Button = styled.button`
	margin: 1rem auto;
`;

const Title = styled.h1`
	color: red;
`;

const Grid = styled.div`
	text-align: center;
`;

const Card = styled.div`
	margin:auto;

	background-color: lightgrey;
	border-radius: 3px;
	width: 450px;
	height: 130px;
	
	padding: 10px;
	// display: grid;
	// grid-template-columns: 1fr 3fr;

	// display: flex;
	// flex-basis: 0;
	// flex-shrink: 0;
	// flex-grow: 1;
	// flex-direction: column;


	img {
		// grid-column: 1;
		// grid-row: 1;
		
		width: 100%; 
		margin: 10px 0;
	}

	div {
		// grid-column: 2;

		text-align: left;
		margin-right: 5px;
	}

	h2 {
		margin-top: 0px;
		margin-left: 5px;
		margin-bottom: 0px;
	}
`;

const Home = () => {
	return (
		<Grid>
			<Title>Teaforge</Title>
			<p>Classic board games of deceipt</p>
			<Link to="/join">
				<Button>Join Game</Button>
			</Link>
			<Link to="/create">
				<Button>Create Game</Button>
			</Link>
			<Card>
				{/* <img src={logo} alt="Resistance Logo"></img> */}
				<div>
					<h2>Resistance</h2>
					<p>Successfully complete your missions while spies try to infiltrate
					your ranks and sabotage them.
					</p>
					<span>5-10</span>
				</div>
			</Card>
		</Grid>
	);

};

export default Home;
import React from 'react';
import styled from 'styled-components';

import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DarkMode = () => (
	<Container>
		<ToggleButton>
			<FontAwesomeIcon icon={faMoon} />
		</ToggleButton>
	</Container>
);

const Container = styled.div`
	position: absolute;
	top: 0;
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	max-width: 450px;
	margin-right: 15px;

	button {
		grid-column: 10;
	}
`;

const ToggleButton = styled.button`
	padding: 15px;
	margin-top: 30px;

	font-size: 25px;
	height: max-content;
	width: max-content;

	border: none;
	border-radius: 5px;
	background: none;
	outline: none;

	transition: background 200ms;

	:hover {
		background: grey;
		cursor: pointer;
	}
`;

export default DarkMode;
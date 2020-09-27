import React from 'react';
import styled from 'styled-components';

import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header: React.FC<{ title: string }> = ({ title }) => (
	<HeadContainer>
		<h1>{title}</h1>
		<ThemeButton>
			<FontAwesomeIcon icon={faSun} />
		</ThemeButton>
	</HeadContainer>

);

const HeadContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 5fr 1fr 1fr;

	h1 {
		grid-column: 3;
	}

	button {
		grid-column: 5;
	}

`;

const ThemeButton = styled.button`
	padding: 10px;
	margin-top: 35px;

	font-size: 30px;
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

export default Header;
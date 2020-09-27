import React from 'react';
import styled from 'styled-components';

import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DarkMode = () => {
	return (
		<div>
			<ThemeButton>
				<FontAwesomeIcon icon={faSun} />
			</ThemeButton>
		</div>
	);
};

const ThemeButton = styled.button`
	border-radius: 3px;
	position: absolute;
	top: 45px;
	right: 350px;
	font-size: 20px;
	background: none;
	border: none;
`;

export default DarkMode;
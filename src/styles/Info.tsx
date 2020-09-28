import styled from 'styled-components';
import ReactModal from 'react-modal';

import { colors } from './Global';

const Container = styled(ReactModal)`
	color: ${props => props.theme.darkMode ? 'white' : 'black'};
	background: ${props => props.theme.darkMode ? colors.bg : 'white'};
	border: ${props => props.theme.darkMode ? 'none' : '1px solid black'};

	text-align: left;
	border-radius: 3px;
	overflow-y: auto;

	width: 800px;
	max-width: 80%;

	height: max-content;
	max-height: 75%;
	
	position: absolute;
	top: 0; bottom: 0; right: 0; left: 0;
	margin: auto;

	padding: 20px;

	text-align: center;
	display: flex;
	flex-direction: column;

	.overlay {
		filter: brightness(40%);
	}

	h1 {
		margin-top: 10px;
	}

	div button {
		max-width: 200px;
	}

	div {
		margin-top: 15px;
	}

	b {
		text-align: left;
	}

	u {
		font-size: 27px;
		text-align: left;
	}

	p {
		margin-top: 0;
		text-align: left;
	}

	span {
		width: max-content;
		margin-bottom: 10px;
	}

	:focus {
		outline: none;
	}
`;

export default Container;
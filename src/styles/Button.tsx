import styled, { css } from 'styled-components';
import { colors } from './Global';

export const buttonStyle = css`
	margin-bottom: 1.2rem;
	margin-right: 0.5rem;
	margin-left: 0.5rem;

	/* top right bottom left*/
	padding: 7px 5px 5px 5px;

	border-radius: 5px;
	width: 40%;
	font-size: 1.4rem;

	transition: background 100ms;

	:focus {
		outline: none;
	}
`;

const Outlined = styled.button`
	${buttonStyle}

	background: ${props => props.theme.darkMode ? colors.bg : 'white'};
	color: ${props => props.theme.darkMode ? colors.lightRed : colors.red};
	border: 2px solid ${props => props.theme.darkMode ? colors.lightRed : colors.red};

	:hover {
		background: ${props => props.theme.darkMode ? colors.lightRed : colors.red};
		color: white;
		cursor: pointer;
	}
`;

const Filled = styled.button`
	${buttonStyle}

	background: ${props => props.theme.darkMode ? colors.lightRed : colors.red};
	color: white;

	border: ${props => props.theme.darkMode ? colors.lightRed : colors.red};

	:hover {
		cursor: pointer;
		filter: brightness(80%);
	}
`;

export default { Outlined, Filled };
import styled, { css } from 'styled-components';
import { dark, light } from './Global';
import { Color, ButtonProps } from '../types';

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

const getColor = (color: Color | undefined, darkMode: boolean) => {
	if (color) return darkMode ? dark[color] : light[color];
	return darkMode ? dark[Color.Red] : light[Color.Red];
};

const Outlined = styled.button<ButtonProps>`
	${buttonStyle}

	background: ${props => props.theme.darkMode ? dark[Color.BG] : light[Color.BG]};
	color: ${props => getColor(props.color, props.theme.darkMode)};
	border: 2px solid ${props => getColor(props.color, props.theme.darkMode)};

	@media (hover: hover) {
		:hover {
			background: ${props => getColor(props.color, props.theme.darkMode)};
			color: white;
			cursor: pointer;
		}
	}
`;

const Filled = styled.button<ButtonProps>`
	${buttonStyle}
	background: ${props => getColor(props.color, props.theme.darkMode)};
	color: white;
	border: ${props => getColor(props.color, props.theme.darkMode)};

	@media (hover: hover) {
		:hover {
			cursor: pointer;
			filter: brightness(80%);
		}
	}
`;

export default { Outlined, Filled };
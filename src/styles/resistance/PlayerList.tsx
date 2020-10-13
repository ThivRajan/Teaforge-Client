import styled from 'styled-components';
import { colors } from '../Global';

export const PlayerList = styled.div`
	margin: auto;
	width: 300px;

	button {
		margin:auto;
		margin-top: 5px;
		width: 100%;
		font-size: 20px;
	}
`;

export const Player = styled.li<PlayerProps>`
	list-style-type: none;
	background: ${props => {
		if (props.theme.darkMode) {
			if (props.chosen) return colors.lightRed;
			return colors.fg;
		} else {
			if (props.chosen) return colors.red;
			else return colors.bg;
		}
	}};
	color: white;
	padding: 8px;
	margin-bottom: 8px;
	border-radius: 3px;
`;
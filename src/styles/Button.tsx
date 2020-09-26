import styled, { css } from 'styled-components';
import { red } from './Global';

const buttonStyle = css`
	margin-bottom: 1.2rem;
	margin-right: 0.5rem;
	margin-left: 0.5rem;

	/* top right bottom left*/
	padding: 7px 5px 5px 5px;

	border-radius: 5px;

	width: 40%;
	transition: background 300ms;

	font-size: 1.1rem;

	:focus {
		outline: none;
	}
`;

export const OutlineButton = styled.button`
	${buttonStyle}

	background: white;
	color: ${props => props.color || red};
	border: 2px solid ${props => props.color || red}; 

	:hover {
		background: ${props => props.color || red};
		color: white;
		cursor: pointer;
	}
`;

export const FilledButton = styled.button`
	${buttonStyle}

	background: ${props => props.color || red};
	color: white;

	border: ${props => props.color || red};

	:hover {
		background: ${props => props.color || red};
		cursor: pointer;
		filter: brightness(80%);
	}
`;

export default { OutlineButton, FilledButton };
import styled from 'styled-components';

import { colors } from './Global';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
`;

export const Card = styled.div`
	color: white;
	background: ${props => props.theme.darkMode ? colors.fg : colors.bg};

	
	border-radius: 3px;
	margin: 15px;
	margin-top: 0;

	display: grid;
	grid-template-columns: 4fr 11fr;
	transition: box-shadow 200ms;
	
	:hover {
		box-shadow: 0px 5px 13px 1px 
			${props => props.theme.darkMode ? '#141414' : '#a3a3a3'};
		cursor: pointer;
	} 
	
	h2 {
        margin: 0;
		font-size: 30px;
		font-weight: bold;
		font-family: Kreon, serif;
    }

    p {
		margin: 0;
		font-size: 17px;
		font-family: 'Signika', sans-serif;
		font-weight: 300;

    }
	
	img {
        grid-column: 1;
        grid-row: 1;
        
		width: 90%;
		margin: auto;
		padding-left: 10px;
	}
	
	div {
        grid-column: 2;
        grid-row: 1;

        text-align: left;

        padding-top: 10px;
        padding-bottom: 15px;
		padding-left: 10px;
    }
`;

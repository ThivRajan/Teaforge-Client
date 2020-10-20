import { createGlobalStyle } from 'styled-components';
import { GlobalStyleProps, Color } from '../types';

export const colors = {
	red: '#ff4545',
	lightRed: '#c97575',
	bg: '#292929',
	fg: '#454545'
};

//TODO: use this syntax in the server too
export const dark: { [key in Color]?: string } = {
	[Color.Red]: '#c97575',
	[Color.Blue]: 'blue',
	[Color.BG]: '#292929',
	[Color.Font]: 'white'
};

export const light: { [key in Color]?: string } = {
	[Color.Red]: '#ff4545',
	[Color.Blue]: 'lightblue',
	[Color.BG]: 'white',
	[Color.Font]: 'black'
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
	body {
		max-width: 450px; 
		margin: 0 auto;
		text-align: center;
		font-family: Signika, sans-serif;

		background: ${props => props.theme.darkMode ? dark[Color.BG] : light[Color.BG]};
		color: ${props => props.theme.darkMode ? dark[Color.Font] : light[Color.Font]};
	}

	i, p, u {
		font-family: Signika, sans-serif;
		font-weight: 300;
		font-size: 20px;
	}

	b {
		font-family: Signika, sans-serif;
		font-size: 20px;
	}

	h1 {
		font-size: 40px;
	}

	h2 {
		font-size: 40px;
	}

	h1, h2, h3, h4 {
		font-family: Kreon, serif;
		text-transform: capitalize;
	}
`;

export default GlobalStyle;
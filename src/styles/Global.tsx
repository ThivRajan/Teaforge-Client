import { createGlobalStyle } from 'styled-components';

export const blue = '#277ee3';
export const red = '#fc3030';

const GlobalStyle = createGlobalStyle`
	body {
		max-width: 450px; 
		margin: 0 auto;
		text-align: center;
		font-family: Signika, sans-serif;
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
		font-size: 45px;
	}

	h1, h2, h3, h4 {
		font-family: Kreon, serif;
	}
`;

export default GlobalStyle;
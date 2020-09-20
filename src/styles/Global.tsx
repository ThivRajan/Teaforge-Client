import { createGlobalStyle } from 'styled-components';

export const blue = '#277ee3';
export const red = '#fc3030';

const GlobalStyle = createGlobalStyle`
	body {
		max-width: 450px; 
		margin: 0 auto;
		text-align: center;
		font-family: Kreon, serif;
	}

	p {
		font-family: Signika, sans-serif;
	}

	h1 {
		font-family: Kreon, serif;
	}
`;

export default GlobalStyle;

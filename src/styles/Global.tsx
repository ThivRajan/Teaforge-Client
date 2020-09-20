import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		max-width: 450px; 
		margin: 0 auto;
		text-align: center;
		font-family: Kreon, serif;
		// background: black;
		// color: white;
	}

	p {
		font-family: Signika, sans-serif;
	}
`;

export default GlobalStyle;

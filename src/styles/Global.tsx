import { createGlobalStyle } from 'styled-components';

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

	button {
		margin-bottom: 1.2rem;
		margin-right: 0.5rem;
		margin-left: 0.5rem;
		width: 10rem;

		padding-bottom: 5px;
		padding-top 7px;

		font-size: 1rem;
		background: white;
		color: #fc3030;
		border: 2px solid #fc3030; 
		border-radius: 5px;

		transition: background 300ms;

		:hover {
			background: #fc3030;
			color: white;
			cursor: pointer;
		}

		:focus {
			outline: none;
		}
	}
	
`;

export default GlobalStyle;

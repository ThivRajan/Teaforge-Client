import styled from 'styled-components';

const Form = styled.form`
	text-align: center;
	padding: 10px;
	margin: auto;
	height: max-content;
	width: 60%;

	input {
		background-color: lightgrey;
		color: black;

		width: 80%;
		padding: 10px;
		margin: 10px;
		
		border: none;
		border-radius: 3px;
		
		font-size: 20px;

		::placeholder {
		   color: grey;
		   text-transform: none;
		}

		:focus {
			outline: none;
		}
	}

	.key {
		text-transform: uppercase;
	}

	button {
		margin-top: 10px;
	}
`;

export default Form;
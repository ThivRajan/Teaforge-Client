import styled from 'styled-components';

const Form = styled.form`
	text-align: center;
	margin: auto;
	height: max-content;
	width: 60%;

	padding: 10px;

	input {
		background-color: lightgrey;
		color: black;
		border: none;
		padding: 10px;
		margin: 10px;
		border-radius: 3px;
		width: 80%;
		font-size: 20px;

		::placeholder {
		   color: grey;
		}

		:focus {
			outline: none;
		}
	}

	button {
		margin-top: 10px;
	}

	styled
`;

export default Form;
import styled from 'styled-components';

const Form = styled.form`
	text-align: center;
	position: absolute;
	top: 0; bottom: 0; left: 0; right: 0;
	margin: auto;
	height: max-content;
	width: max-content;

	padding: 10px;
	background-color: grey;

	h3 {
		color: blue;
	}

	input {
		background-color: lightblue;
		color: red;
	}
`;

export default Form;
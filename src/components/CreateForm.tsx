import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Form from '../styles/Form';

const Grid = styled.div`
	height: 100vh;
`;

const CreateForm = () => {
	return (
		<Grid>
			<Form>
				<h3>Create Room</h3>
				<input placeholder="Name"></input>
				<br />
				<Link to="/lobby">
					<button>Join</button>
				</Link>
				<Link to="/">
					<button>Cancel</button>
				</Link>
			</Form>
		</Grid>
	);
};


export default CreateForm;
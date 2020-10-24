import React from 'react';
import styled from 'styled-components';

import { Color } from '../../../types';
import { Votes } from '../../../types/resistance';

import { dark } from '../../../styles/Global';

const VoteResults: React.FC<{ votes: Votes }> = ({ votes }) => (
	<>
		<Header>Vote Results</Header>
		<VoteTable>
			<div className={'approved'}>
				<u>Approved</u>
				{votes.approve.map(v => <li key={v}>{v}</li>)}
			</div>
			<div className={'rejected'}>
				<u>Rejected</u>
				{votes.reject.map(v => <li key={v}>{v}</li>)}
			</div>
		</VoteTable>
	</>
);

const Header = styled.h3`
	margin-bottom: 15px;
	font-size: 30px;
`;

const VoteTable = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 350px;
	margin: auto;
	
	p {
		margin-bottom: 5px;
		font-weight: 600;
		font-size: 25px;
	}

	li {
		list-style: none;
		margin-bottom: 3px;
		font-weight: 300;
		font-size: 20px;
	}

	.approved li {
		color: ${dark[Color.Green]};
		margin: auto;
	}

	.rejected li {
		color: ${dark[Color.Red]};
		margin: auto;
	}
`;

export default VoteResults;
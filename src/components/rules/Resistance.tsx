import React from 'react';

const playerCount = '5-10 players';

const Goal = () => (
	<i>Your goal is to either succeed or sabotage the mission</i>
);

const Rules = () => (
	<>
		<p>
			<b>
				Players are allowed to talk at any point in the game, as long
				as they are talking publicly (everyone must know what any one person
				says).
			</b>
		</p>

		<p>
			There are two roles: Resistance or Spies. The Spies win
			if three missions fail, and the Resistance win if three missions
			succeed. Before the game begins, each player will be shown a message
			telling them their role. If you are a spy, then you will also
			be told who the other spies are.
		</p>
		<p>
			1. First, there is the team creation phase, where the team leader
			will decide which players he/she wants on the mission. Note that
			the team leader is rotated every turn (so the leader is always
			a different person until everyone has been the leader).
		</p>
		<p>
			2. Once the leader has selected members, everyone will vote for
			approving the team or not. If there is a majority vote of approval,
			then you&apos;ll move on to the next phase. If there isn&apos;t a
			majority vote, then there will be a different leader and the game
			goes back to the team creation phase.
		</p>
		<p>
			3. Once the team has gotten majority approval, you will move to
			the mission phase. Everyone on the team will get an option to either
			succeed or fail the mission. If there is even a single person who selects
			&quot;fail&quot;, then the entire mission is considered to be a Fail. Once all
			the team members have selected their option, you will be shown the mission
			result (Success or Fail).
		</p>
		<p>
			4. Now #1-3 will repeat until there are 3 successes (Resistance wins)
			or 3 fails (Spies win).
		</p>

		<b>
			Tip: If you are a spy, try to get either yourself or a fellow spy
			to sneak onto the mission and fail it. If you are resistance, then try
			to figure out who the spies are and stop them from going on the mission.
		</b>
	</>
);

export default { Goal, Rules, playerCount };
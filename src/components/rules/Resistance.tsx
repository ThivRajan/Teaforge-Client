import React from 'react';

const Goal = () => (
	<i>Your goal is to either succeed or sabotage the missions</i>
);

//TODO: try modifying, say rules out loud
const Rules = () => (
	<>
		<br />
		<b>5-10 Players</b>
		<br />
		<p>
			<i>
				Players are allowed to talk at any point in the game, as long
				as they are talking publicly (everyone must know what any one person
				says).
			</i>
		</p>
		<p>
			Players are split into two teams, Resistance or Spies. The goal of
			the Resistance is to succeed the missions while the goal of the Spies
			is to fail the missions. <b>The Resistance win if 3 missions succeed and
			the Spies win if 3 missions fail.</b>
		</p>
		<p>
			Before each mission, a team leader will select based on the number of people
			needed for each mission (which will be shown at the top). Then all the players
			will vote to approve or reject the team. A team needs a majority approval
			to go on the mission, otherwise it will be rejected. If a team is rejected, a
			new team leader will try selecting a team.
		</p>
		<p>
			Once a team is approved, they will go on the mission and each team member will
			get the option to pass or fail the mission. <b>A mission will fail if even one
			person fails the mission.</b> This will repeat until one team has won.
		</p>
	</>
);

export default { Goal, Rules };
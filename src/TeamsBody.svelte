<!-- Side Menu -->
<Drawer variant="modal" bind:open>
	<Header>
		<Title>3314 Scouting</Title>
		<!-- <Subtitle>Best scouting app ever made</Subtitle> -->
		<Subtitle>{teamNumber}</Subtitle>
	</Header>
	<Content>
		<List>
			<!-- All Teams -->
			<Item href="javascript:void(0)" on:click={()=> allTeams()}>
				<Graphic class="material-icons" aria-hidden="true">home</Graphic>
				<Text>All Teams</Text>
			</Item>
			<!-- Search -->
			<Item href="javascript:void(0)" on:click={()=> search()}>
				<Graphic class="material-icons" aria-hidden="true">search</Graphic>
				<Text>Search</Text>
			</Item>
			<!-- Set Event -->
			<Item href="javascript:void(0)" on:click={()=> setEvent()}>
				<Graphic class="material-icons" aria-hidden="true">add</Graphic>
				<Text>Add Team</Text>
			</Item>
			<!-- Set Event -->
			<Item href="javascript:void(0)" on:click={()=> setEvent()}>
				<Graphic class="material-icons" aria-hidden="true">insert_invitation</Graphic>
				<Text>Set Event</Text>
			</Item>
			<!-- Sync -->
			<Item href="javascript:void(0)" on:click={()=> sync()}>
				<Graphic class="material-icons" aria-hidden="true">autorenew</Graphic>
				<Text>Sync</Text>
			</Item>

			<!-- Recently visited teams -->
			<Separator />
			<Subheader tag="h6">Recent</Subheader>
			{#each recentTeams as rt}
			<Item href="javascript:void(0)" on:click={()=> openTeam(rt)}>
				<Graphic class="material-icons" aria-hidden="true">label</Graphic>
				<Text>{rt.teamName}</Text>
			</Item>
			{/each}
		</List>
	</Content>
</Drawer>
<Scrim />
<!-- End Side Menu -->

<TopAppBar appBarTitle="Teams" iconPlacement="left" muiIcon="menu" callback={openMenu} />
<div class="body">
	<!-- Favorite Teams -->
	{#if favTeams.length > 0}
	<div class="team-section">
		<div class="title">Favorites</div>
		<div class="teams">
			{#each favTeams as t}
			<div class="team">
				<div class="team-logo"><img src="{team.logo}" aria-label="{team.number} logo"></div>
				<div class="team-text">
					<div class="team-name">{t.teamName}</div>
					<div class="team-number">{t.teamNumber}</div>
				</div>
			</div>
			{/each}
		</div>
	</div>
	{/if}
	<!-- <div class="team-section">
		<div class="title">Event</div>
		<div class="teams">
			{#each teams as team}
			<div class="team">
				<div class="team-logo"><img src="" alt="" srcset=""></div>
				<div class="team-text">
					<div class="team-name">{team.name}</div>
					<div class="team-number">{team.number}</div>
				</div>
			</div>
			{/each}
		</div>
	</div> -->
	<div class="team-section">
		<div class="title">All</div>
		<div class="teams">
			{#each teams as t}
			<div class="team" on:click={()=> openTeam(t)}>
				<div class="team-logo"><img src="" alt="" srcset=""></div>
				<div class="team-text">
					<div class="team-name">{t.teamName}</div>
					<div class="bottom-stuff">
						<div class="team-number">{t.teamNumber}</div>
					</div>
				</div>
			</div>
			{/each}
		</div>
	</div>
</div>

<script>
	import TopAppBar from './TopAppBar.svelte';
	import * as db from './js/db'
	let teams = []

	db.getTeams().then(results => {
		teams = results
	}).catch(error => {
		console.log(error)
	})

	import Drawer, {
		AppContent,
		Content,
		Header,
		Title,
		Subtitle,
		Scrim,
	} from '@smui/drawer';
	import Button, { Label } from '@smui/button';
	import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';

	let open = false
	let teamNumber = null
	let recentTeams = []
	let favTeams = []

	function openMenu() {
		open = true
	}

	function openTeam(team) {
		// Check if team is already in list
		let inRecentTeams = false
		recentTeams.forEach(t => {
			if (t.teamNumber === team.teamNumber) {
				inRecentTeams = true
			}
		});
		if (!inRecentTeams) {
			const MAX_RECENT_TEAMS = 5
			if (recentTeams.length === MAX_RECENT_TEAMS) {
				recentTeams = [team, recentTeams[0], recentTeams[1]]
			} else {
				recentTeams[recentTeams.length] = team
			}
		}

		teamNumber = team.teamNumber
	}

	function allTeams() {
		open = false
	}

	function search() {
		open = false
		// show search modal
	}

	function setEvent() {
		open = false
	}

	function sync() {
		open = false
	}

	// Changes UI to reflect multiselection of teams for batch operations
	// function selectTeam(evt) {
		// Show checkmark
		// console.log(evt.target.parentElement.parentElement.classList.add('selected'))
		// If checkmark is already applied then unapply it
		// Add to selection list
		// Apply classes for selection
	// }
</script>
<style>
	.body {
		padding: 0.7rem 0.0rem;
	}

	.team-section {
		margin-bottom: 0.5em;
	}

	.team-section>.title {
		font-size: 1rem;
		color: rgb(32, 32, 32);
		margin-bottom: 0.1rem;
		margin-left: 0.6rem;
	}

	.team {
		padding: 0.6rem 0.6rem;
		/* border-radius: 5px; */

		display: flex;
		gap: 1rem;
		align-items: center;
		font-size: 0.85rem;

		border-bottom: 1px solid rgb(222, 222, 222);
	}

	.team:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	.team:first-child {
		/* border-radius: 10px 10px 0 0; */
		/* border-radius: 5px 5px 0 0; */
		/* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
	}

	.team:last-child {
		border: none;
		/* border-radius: 0 0 5px 5px; */
	}

	.team>.team-logo {
		width: 2rem;
		height: 2rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: rgb(255, 219, 219)
	}

	.team-text {
		width: 100%;
	}

	.team .team-number {
		color: rgba(0, 0, 0, 0.5);
		font-size: 0.7rem;
	}

	.bottom-stuff {
		width: 100%;
		display: flex;
		gap: 1rem;
		/* justify-content: space-between; */
	}
</style>
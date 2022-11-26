<!-- Side Menu -->
<Drawer variant="modal" bind:open>
	<Header>
		<Title>Super Mail</Title>
		<Subtitle>It's the best fake mail app drawer.</Subtitle>
	</Header>
	<Content>
		<List>
			<Item href="javascript:void(0)" on:click={()=> setActive('Inbox')}
				activated={active === 'Inbox'}
				>
				<Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
				<Text>Inbox</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={()=> setActive('Star')}
				activated={active === 'Star'}
				>
				<Graphic class="material-icons" aria-hidden="true">star</Graphic>
				<Text>Star</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={()=> setActive('Sent Mail')}
				activated={active === 'Sent Mail'}
				>
				<Graphic class="material-icons" aria-hidden="true">send</Graphic>
				<Text>Sent Mail</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={()=> setActive('Drafts')}
				activated={active === 'Drafts'}
				>
				<Graphic class="material-icons" aria-hidden="true">drafts</Graphic>
				<Text>Drafts</Text>
			</Item>

			<Separator />
			<Subheader tag="h6">Labels</Subheader>
			<Item href="javascript:void(0)" on:click={()=> setActive('Family')}
				activated={active === 'Family'}
				>
				<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
				<Text>Family</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={()=> setActive('Friends')}
				activated={active === 'Friends'}
				>
				<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
				<Text>Friends</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={()=> setActive('Work')}
				activated={active === 'Work'}
				>
				<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
				<Text>Work</Text>
			</Item>
		</List>
	</Content>
</Drawer>
<Scrim />
<!-- End Side Menu -->

<TopAppBar appBarTitle="Teams" iconPlacement="left" muiIcon="menu" callback={openMenu} />
<div class="body">

	<!-- <div class="team-section">
		<div class="title">Favorites</div>
		<div class="teams">
			{#each teams as team}
			<div class="team">
				<div class="team-logo"><img src="{team.logo}" aria-label="{team.number} logo"></div>
				<div class="team-text">
					<div class="team-name">{team.name}</div>
					<div class="team-number">{team.number}</div>
				</div>
			</div>
			{/each}
		</div>
	</div> -->
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
			<div class="team">
				<div class="team-logo"><img src="" alt="" srcset=""></div>
				<div class="team-text">
					<div class="team-name">{t.teamName}</div>
					<div class="team-number">{t.teamNumber}</div>
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
	let active = 'Inbox'

	function setActive(value) {
		active = value
		open = false
	}

	function openMenu() {
		open = true
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
		border-radius: 50%;
		background-color: rgb(255, 219, 219)
	}

	.team .team-number {
		color: rgba(0, 0, 0, 0.5);
		font-size: 0.7rem;
	}
</style>
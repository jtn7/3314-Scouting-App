<!-- Side Menu -->
<Drawer variant="modal" bind:open={sidebarOpen}>
	<Header>
		<Title>3314 Scouting</Title>
		<Subtitle>version 0.3</Subtitle>
	</Header>
	<Content>
		<List>
			<!-- All Teams -->
			<Item href="javascript:void(0)" on:click={()=> allTeams()}>
				<Graphic class="material-icons" aria-hidden="true">home</Graphic>
				<Text>All Teams</Text>
			</Item>
			<!-- Search -->
			<Item href="javascript:void(0)" on:click={()=> openSearchModal()}>
				<Graphic class="material-icons" aria-hidden="true">search</Graphic>
				<Text>Search</Text>
			</Item>
			<!-- Set Event -->
			<Item href="javascript:void(0)" on:click={()=> setEvent()}>
				<Graphic class="material-icons" aria-hidden="true">add</Graphic>
				<Text>Add Team</Text>
			</Item>
			<!-- Set Event -->
			<Item href="javascript:void(0)" on:click={()=> openEventModal()}>
				<Graphic class="material-icons" aria-hidden="true">insert_invitation</Graphic>
				<Text>Set Event</Text>
			</Item>
			<!-- Sync -->
			<!-- <Item href="javascript:void(0)" on:click={()=> sync()}>
				<Graphic class="material-icons" aria-hidden="true">autorenew</Graphic>
				<Text>Sync</Text>
			</Item> -->
			<!-- Sync -->
			<Item href="javascript:void(0)" on:click={()=> openSigninModal()}>
				<Graphic class="material-icons" aria-hidden="true">autorenew</Graphic>
				<Text>Sign in</Text>
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


{#if selectedTeam == null}
<TopAppBar appBarTitle="Teams" iconPlacement="left" muiIcon="menu" callback={openMenu} />
<div class="body">
	<!-- Favorite Teams -->
	<!-- {#if favTeams.length > 0}
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
	{/if} -->
	<div class="team-section">
		<div class="title">Event</div>
		<div class="teams">
			{#each eventTeams as t}
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
	{#if initText != ''}
	<div class="default-msg">{initText}</div>
	{/if}

</div>
<!-- Modal for event selection -->
<Dialog bind:open={eventModalOpen} selection on:SMUIDialog:closed={closeEventModal}>
	<DTitle id="list-selection-title">Set Event</DTitle>
	<DContent id="list-selection-content">
		<List radioList>
			{#each events as event}
			<Item>
				<Graphic>
					<Radio bind:group={selectedEvent} value={event.code} />
				</Graphic>
				<Text>{event.name}</Text>
			</Item>
			{/each}
		</List>
	</DContent>
	<Actions>
		<Button on:click={updateEvent}>
			<Label>Set Event</Label>
		</Button>
	</Actions>
</Dialog>

<!-- Modal for signin -->
<Dialog bind:open={signInModalOpen} aria-labelledby="sign-in" aria-describedby="sign-in" on:SMUIDialog:closed={closeSigninModal}>
	<DTitle id="event-title">Sign-in</DTitle>
	<DContent id="event-content">
		<List>
			<Item>
				<Textfield bind:value={password} label="Password" type="text" />
			</Item>
		</List>
	</DContent>
	<Actions>
		<Button on:click={signIn} action="none" default>
			<Label>Sign in</Label>
		</Button>
	</Actions>
</Dialog>

{:else}
<TeamPage close={closeTeam} teamData={selectedTeam}/>
{/if}

<script>
	import TopAppBar from './TopAppBar.svelte'
	import TeamPage from './TeamPage.svelte'
	import * as db from './js/db'
	import * as fs from './js/firestore'
	import Dialog, { Title as DTitle, Content as DContent, Actions }from '@smui/dialog'
	import Radio from '@smui/radio';
	import Textfield from '@smui/textfield'
	import Select, { Option } from '@smui/select';
	import * as st from './js/stores'
	import { onMount } from 'svelte'
	let teams = []
	let events = []
	let thisEvent = ''
	let password = ''
	let searchOpen = false

	onMount(async() => {
		// stores
		st.teams.subscribe(val => {
			teams = val
		})
		st.events.subscribe(val => {
			events = val
		})
		st.currentEvent.subscribe(val => {
			thisEvent = val
		})

		// Signin modal
		password = document.cookie
		fs.initFirebase(password).then(() => initText = '').catch(
			() => {
				initText = 'Sign in'
				password = ''
				document.cookie = ''
			}
		)

		setEventTeams()
	})

	// db.getTeams().then(results => {
	// 	teams = results
	// }).catch(error => {
	// 	console.log(error)
	// })

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

	let sidebarOpen = false
	let teamNumber = null
	let recentTeams = []
	let favTeams = []
	let initText = 'Loading'

	function openMenu() {
		sidebarOpen = true
	}

	let selectedTeam = null
	function openTeam(team) {
		selectedTeam = team
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
				recentTeams = [
					team, recentTeams[0],
					recentTeams[1], recentTeams[2],
					recentTeams[3]
				]
			} else {
				recentTeams[recentTeams.length] = team
			}
		}

		teamNumber = team.teamNumber
		sidebarOpen = false
	}

	function allTeams() {
		sidebarOpen = false
	}

	function openSearchModal() {
		sidebarOpen = false
		// show search modal
		searchOpen = true
	}

	function setEvent() {
		sidebarOpen = false
	}

	function sync() {
		fs.initFirebase()
	}

	function closeTeam() {
		selectedTeam = null
	}


	let signInModalOpen = false
	// Open signin modal
	function openSigninModal() {
		sidebarOpen = false
		signInModalOpen = true
	}
	function signIn() {
		// fs.signIn(username, password)
		console.log("attempting to sign in")

		// Init firebase connection / load teams
		fs.initFirebase(password).then(() => {
			initText = ''
			document.cookie = password
		}).catch(() => {
			initText = 'Sign in'
		})
	}
	function closeSigninModal() {
		signInModalOpen = false
	}

	// Event Modal
	let selectedEvent = ''
	let eventModalOpen = false
	function openEventModal() {
		sidebarOpen = false
		eventModalOpen = true
	}
	function updateEvent() {
		st.currentEvent.set(selectedEvent)
		setEventTeams()
	}
	function closeEventModal() {
		eventModalOpen = false
	}

	const eventMap = {
		"NJROB": "Robbinsville",
		"PABEN":"Bensalem",
		"MABRI":"NE District SE Mass Event"
	}
	let eventTeams = []
	function setEventTeams() {
		let evTeams = eventMap[thisEvent]
		fs.getEventTeams(evTeams).then((result) => {
			eventTeams = result
		})
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
		padding: 0.7rem 0.0rem 4rem;
	}

	.team-section {
		margin-bottom: 0.5em;
	}

	.default-msg {
		font-size: 2rem;
		font-weight: bold;
		height: 70vh;
		display: flex;
		justify-content: center;
		text-align: center;
		flex-direction: column;
		color: gray;
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

	.team .team-name {
		font-size: 1rem;
	}

	.team .team-number {
		color: rgba(0, 0, 0, 0.5);
		font-size: 0.8rem;
	}

	.bottom-stuff {
		width: 100%;
		display: flex;
		gap: 1rem;
		/* justify-content: space-between; */
	}
</style>
	{#if viewTeleGrid}
	<!-- <div in:fade="{{delay: 0, duration: 400, x: 100, y: 0, opacity: 0.5, easing: quintOut}}"
		out:fade="{{delay: 0, duration: 100, x: 100, y: 0, opacity: 0.2}}"> -->
	<div in:scale="{{delay: 0, duration: 300, opacity: 0.5, start: 0.5, easing: quintOut}}"
		out:fade="{{duration: 100, easing: linear}}">
			<Grid close={closeTeleGrid} bind:attemptGrid={teleAttemptGrid} bind:gridData={teleGrid} />
	</div>
	{:else if viewAutoGrid}
	<div in:scale="{{delay: 0, duration: 300, opacity: 0.5, start: 0.5, easing: quintOut}}"
		out:fade="{{duration: 100, easing: linear}}">
			<Grid close={closeAutoGrid} bind:attemptGrid={autoAttemptGrid} bind:gridData={autoGrid} />
	</div>
	{:else if qrOpen}
	<div in:scale="{{delay: 0, duration: 300, opacity: 0.5, start: 0.5, easing: quintOut}}"
		out:fade="{{duration: 100, easing: linear}}">
		<QRMatch close={closeQR} payload={qrData} match={matchNumber} team={teamNumber} />
	</div>
	{:else}
		<TopAppBar appBarTitle="Scouting" iconPlacement="right" muiIcon="add" callback={addTeam} />
		{#if active !== ''}
		<TabBar tabs={teams} let:tab bind:active>
			<Tab {tab}>
				<Label>{tab}</Label>
			</Tab>
		</TabBar>
		<div class="scout-body">
			<div class="section-title">Team</div>
			<div class="field-section">
				<div class="inputField">
					<div class="field-name">Aliance</div>
					<Select bind:value={alliance}>
						<Option value=""></Option>
						<Option value="Blue">Blue</Option>
						<Option value="Red">Red</Option>
					</Select>
				</div>
				<div class="inputField">
					<div class="field-name">Aliance partner 1</div>
					<Textfield bind:value={partner1} label="Alliance Partner 1" type="number"/>
				</div>
				<div class="inputField">
					<div class="field-name">Aliance partner 2</div>
					<Textfield bind:value={partner2} label="Alliance Partner 2" type="number"/>
				</div>
			</div>

			<div class="section-title">Auton</div>
			<div class="field-section">
				<div class="inputField">
					<div class="field-name">Starting Location</div>
					<Select bind:value={startingLoc}>
						<Option value=""></Option>
						<Option value="1">1</Option>
						<Option value="2">2</Option>
						<Option value="3">3</Option>
						<Option value="4">4</Option>
					</Select>
				</div>
				<div class="inputField">
					<div class="field-name">Started With</div>
					<Select bind:value={startedWith}>
						<Option value=""></Option>
						<Option value="Cone">Cone</Option>
						<Option value="Cube">Cube</Option>
					</Select>
				</div>
				<div class="inputField">
					<div class="field-name">Pickup 1</div>
					<Select bind:value={pickup1}>
						<Option value=""></Option>
						<Option value="A">A</Option>
						<Option value="B">B</Option>
						<Option value="C">C</Option>
						<Option value="D">D</Option>
					</Select>
				</div>
				<div class="inputField">
					<div class="field-name">Pickup 1 Piece</div>
					<Select bind:value={pickup1Piece}>
						<Option value=""></Option>
						<Option value="cone">Cone</Option>
						<Option value="cube">Cube</Option>
					</Select>
				</div>
				<div class="inputField">
					<div class="field-name">Pickup 2</div>
					<Select bind:value={pickup2}>
						<Option value=""></Option>
						<Option value="A">A</Option>
						<Option value="B">B</Option>
						<Option value="C">C</Option>
						<Option value="D">D</Option>
					</Select>
				</div>
				<div class="inputField">
					<div class="field-name">Pickup 2 Piece</div>
					<Select bind:value={pickup2Piece}>
						<Option value=""></Option>
						<Option value="cone">Cone</Option>
						<Option value="cube">Cube</Option>
					</Select>
				</div>
				<div class="inputField">
					<div class="field-name">Didn't Move</div>
					<CheckBoxField bind:checked={noMove}/>
				</div>
			</div>
			<div class="field-section">
				<Button on:click={openAutoGrid} variant="raised">
					<Label>Auton Grid</Label>
				</Button>
			</div>
			<div class="field-section">
				<div class="inputField">
					<div class="field-name">Docked</div>
					<CheckBoxField bind:checked={aDocked}/>
				</div>
				<div class="inputField">
					<div class="field-name">Engaged</div>
					<CheckBoxField bind:checked={aEngaged}/>
				</div>
				<div class="inputField">
					<div class="field-name">Mobility</div>
					<CheckBoxField bind:checked={aMobility}/>
				</div>
			</div>
			<div class="section-title">During the Match</div>
			<div class="field-section">
				<div class="inputField">
					<div class="field-name">Penalties</div>
					<CheckBoxField bind:checked={tPenalties}/>
				</div>
				<div class="inputField">
					<div class="field-name">Lost Comms</div>
					<CheckBoxField bind:checked={tLostComms}/>
				</div>
				<div class="inputField">
					<div class="field-name">Disabled</div>
					<CheckBoxField bind:checked={tDisabled}/>
				</div>
				<div class="inputField">
					<div class="field-name">Lost Bumper</div>
					<CheckBoxField bind:checked={tLostBumper}/>
				</div>
				<div class="inputField">
					<div class="field-name">No Show</div>
					<CheckBoxField bind:checked={tNoShow}/>
				</div>
				<div class="inputField">
					<div class="field-name">Picked up from Floor</div>
					<CheckBoxField bind:checked={tPickedUpFloor}/>
				</div>
				<div class="inputField">
					<div class="field-name">Picked up from Substation</div>
					<CheckBoxField bind:checked={tPickedUpShelf}/>
				</div>
				<div class="inputField">
					<div class="field-name">Staged Game Pieces</div>
					<CheckBoxField bind:checked={tStagedPieces}/>
				</div>
				<div class="inputField">
					<div class="field-name">Scored from Staged</div>
					<CheckBoxField bind:checked={tScoredStaged}/>
				</div>
				<div class="inputField">
					<div class="field-name">Played Defense</div>
					<CheckBoxField bind:checked={tPlayedDefense}/>
				</div>
				<div class="inputField">
					<div class="field-name">Excellent Driving</div>
					<CheckBoxField bind:checked={tExcellentDriving}/>
				</div>
			</div>
			<div class="section-title">Teleop</div>
			<div class="field-section">
				<Button on:click={openTeleGrid} variant="raised">
					<Label>Teleop Grid</Label>
				</Button>
			</div>
			<div class="field-section">
				<div class="inputField">
					<div class="field-name">Docked</div>
					<CheckBoxField bind:checked={tDocked}/>
				</div>
				<div class="inputField">
					<div class="field-name">Engaged</div>
					<CheckBoxField bind:checked={tEngaged}/>
				</div>
				<div class="inputField">
					<div class="field-name">Parked</div>
					<CheckBoxField bind:checked={tParked}/>
				</div>
			</div>
			<Button on:click={openQRMatch} variant="raised">
				<Label>QR</Label>
			</Button>
		</div>
		{:else}
		<div class="default-msg">Set team & match</div>
		{/if}
	{/if}
<Dialog bind:open={openSetTeam} aria-labelledby="event-title" aria-describedby="event-content" on:SMUIDialog:closed={closeHandler}>
	<Title id="event-title">Set Match</Title>
	<Content id="event-content">
		<List>
			<Item>
				<Textfield bind:value={teamNumber} label="Team Number" type="number" />
			</Item>
			<Item>
				<Textfield bind:value={matchNumber} label="Match Number" type="number" />
			</Item>
		</List>
	</Content>
	<Actions>
		<Button on:click={setScoutTeam} action="none" default>
			<BLabel>Scout</BLabel>
		</Button>
	</Actions>
</Dialog>

<script>
	import { scale, fade, blur } from 'svelte/transition';
	import { quintOut, linear } from 'svelte/easing';
	import Grid from './Grid.svelte'
	import TopAppBar from './TopAppBar.svelte'
	import QRMatch from './QRMatch.svelte'
	import Tab, { Label } from '@smui/tab'
	import IconButton from '@smui/icon-button'
	import TabBar from '@smui/tab-bar'
	import Button, { Label as BLabel } from '@smui/button'
	import NumberField from './NumberField.svelte'
	import CheckBoxField from './CheckBoxField.svelte'
	import Dialog, { Title, Content, Actions } from '@smui/dialog'
	import Textfield from '@smui/textfield'
	import List, { Item } from '@smui/list'
	import CounterInput from './CounterInput.svelte'
	import Select, { Option } from '@smui/select';
	import * as db from './js/db'
	import * as st from './js/stores'
	import * as fs from './js/firestore'
	import { onMount } from 'svelte'

	onMount(async() => {
		st.currentEvent.subscribe(val => {
			eventCode = val
		})
	})

	// const CONE = 2
	// const CUBE = 1
	const NONE = 0
	let teleGrid = [
		[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
		[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
		[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ]
	]
	let teleAttemptGrid = [
		[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
		[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
		[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ]
	]


	let autoGrid = [
		[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
		[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
		[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ]
	]
	let autoAttemptGrid = [
		[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
		[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
		[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ]
	]

	let teamNumber = 0
	let openSetTeam = false
	let robotInfo = {}
	let matchNumber = 0
	let active = ''
	let eventCode = ''

	let alliance = ''
	let partner1 = ''
	let partner2 = ''
	// Auton Scoring
	let startingLoc = ''
	let startedWith = ''
	let pickup1 = ''
	let pickup2 = ''
	let pickup1Piece = ''
	let pickup2Piece = ''
	let noMove = false

	let aDocked = false
	let aEngaged = false
	let aMobility = false

	// Teleop Scoring
	let tPenalties = false
	let tLostComms = false
	let tDisabled = false
	let tLostBumper = false
	let tNoShow = false
	let tPickedUpFloor = false
	let tPickedUpShelf = false
	let tStagedPieces = false
	let tScoredStaged = false
	let tPlayedDefense = false
	let tExcellentDriving = false

	let tDocked = false
	let tEngaged = false
	let tParked = false

	let teams = []


	let viewTeleGrid = false
	function openTeleGrid() {
		viewTeleGrid = true
	}
	function closeTeleGrid() {
		viewTeleGrid = false
	}
	let viewAutoGrid = false
	function openAutoGrid() {
		viewAutoGrid = true
	}
	function closeAutoGrid() {
		viewAutoGrid = false
	}

	// Show "add team" dialog
	function addTeam() {
		openSetTeam = true;
	}

	function closeHandler() {
		openSetTeam = false;
	}

	function setScoutTeam() {
		teams = [`${teamNumber} #${matchNumber}`]
		active = `${teamNumber} #${matchNumber}`

		alliance = ''
		partner1 = ''
		partner2 = ''
		// Auton Scoring
		startingLoc = ''
		startedWith = ''
		pickup1 = ''
		pickup1Piece = ''
		pickup2 = ''
		pickup2Piece = ''
		noMove = false
		aDocked = false
		aEngaged = false
		aMobility = false

		// Teleop Scoring
		tPenalties = false
		tLostComms = false
		tDisabled = false
		tLostBumper = false
		tNoShow = false
		tPickedUpFloor = false
		tPickedUpShelf = false
		tStagedPieces = false
		tScoredStaged = false
		tPlayedDefense = false
		tExcellentDriving = false
		tDocked = false
		tEngaged = false
		tParked = false

		teleGrid = [
			[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
			[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
			[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ]
		]
		teleAttemptGrid = [
			[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
			[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
			[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ]
		]

		autoGrid = [
			[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
			[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
			[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ]
		]
		autoAttemptGrid = [
			[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
			[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ],
			[ NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE, NONE ]
		]
	}

	let qrOpen = false
	function closeQR() {
		qrOpen = false
	}

	let qrData = {}
	function openQRMatch() {
		qrOpen = true
		const matchData = {
			a: teamNumber,
			b: matchNumber,
			c: {
				d: alliance,
				e: partner1,
				f: partner2,

				// Auton Scoring
				g: startingLoc,
				h: startedWith,
				i: pickup1,
				j: pickup1Piece,
				k: pickup2,
				l: pickup1Piece,
				m: noMove ? 1 : 0,
				n: autoGrid[0],
				o: autoGrid[1],
				p: autoGrid[2],
				a1: autoAttemptGrid[0],
				a2: autoAttemptGrid[1],
				a3: autoAttemptGrid[2],
				q: aDocked ? 1 : 0,
				r: aEngaged ? 1 : 0,
				s: aMobility ? 1 : 0,

				// Teleop Scoring
				t: tPenalties ? 1 : 0,
				u: tLostComms ? 1 : 0,
				v: tDisabled ? 1 : 0,
				w: tLostBumper ? 1 : 0,
				x: tNoShow ? 1 : 0,
				y: tPickedUpFloor ? 1 : 0,
				z: tPickedUpShelf ? 1 : 0,
				aa: tStagedPieces ? 1 : 0,
				ab: tScoredStaged ? 1 : 0,
				ac: tPlayedDefense ? 1 : 0,
				ad: tExcellentDriving ? 1 : 0,
				ae: teleGrid[0],
				af: teleGrid[1],
				ag: teleGrid[2],
				t1: teleAttemptGrid[0],
				t2: teleAttemptGrid[1],
				t3: teleAttemptGrid[2],
				ah: tDocked ? 1 : 0,
				aj: tEngaged ? 1 : 0,
				ak: tParked ? 1 : 0,
			}
		}
		qrData = btoa(JSON.stringify(matchData))
		qrOpen = true
	}


	function saveMatch() {
		const matchData = {
			allianceColor: alliance,
			teamPartner1: partner1,
			teamPartner2: partner2,
			// Auton Scoring
			autoStartingLoc: startingLoc,
			autoStartedWith: startedWith,
			autoPickup1: pickup1,
			autoPickup2: pickup2,
			autoNoMove: noMove,
			autoGrid: autoGrid,
			autoDocked: aDocked,
			autoEngaged: aEngaged,
			autoMobility: aMobility,

			// Teleop Scoring
			teleopPenalties: tPenalties,
			teleopLostComms: tLostComms,
			teleopDisabled: tDisabled,
			teleopLostBumper: tLostBumper,
			teleopNoShow: tNoShow,
			teleopPickedUpFloor: tPickedUpFloor,
			teleopPickedUpShelf: tPickedUpShelf,
			teleopStagedPieces: tStagedPieces,
			teleopScoredStaged: tScoredStaged,
			teleopPlayedDefense: tPlayedDefense,
			teleopExcellentDriving: tExcellentDriving,
			teleGrid: teleGrid,
			teleopDocked: tDocked,
			teleopEngaged: tEngaged,
			teleopParked: tParked,
		}
		fs.saveMatchData(teamNumber, matchNumber, eventCode, matchData)
		.then(() => {
			console.log("match saved")
		})
		.catch(err => {
			console.log("match saving failed:", err)
		})
	}
</script>

<style>

	.section-title {
		font-size: 1.5rem;
		margin-bottom: 0.5rem
	}

	.default-msg {
		font-size: 2rem;
		font-weight: bold;
		height: 80vh;
		display: flex;
		justify-content: center;
		text-align: center;
		flex-direction: column;
		color: gray;
	}

	.btn {
		background-color: var(--mdc-theme-primary);
		color: white;
		border-radius: 50%;
		padding: 0.3em;
		font-size: 23px;
		margin-right: calc(0.7em + 13px);
	}
	.scout-body {
		display: flex;
		flex-direction: column;
		padding: 1rem 5px;
		margin-bottom: 4rem;
	}

	.teamNumber {
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.field-section {
		/* border: 1px solid rgba(214, 0, 0, 0.2); */
		/* border-radius: 5px; */
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
		border-radius: 20px;
		margin-bottom: 1rem;
	}

	.field-name {
		margin-left: 0.5em;
	}

	.tabbar {
		/* background-color: var(--mdc-theme-primary); */
	}

	.white {
		color: white !important;
	}

	.inputField {
		display: flex;
		justify-content: space-between;
		background-color: white;

		/* border: 1px solid rgba(214, 0, 0, 0.2); */
		border-bottom: 1px solid rgba(0, 0, 0, 0.087);
		
		padding: 1rem;
	}

	.inputField:first-child {
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}

	.inputField:last-child {
		border-bottom: 0;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}

	.inputField > .field-name {
		/* padding-top: 3px; */
		align-self: center;
	}

</style>
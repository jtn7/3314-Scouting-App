{#if eventCode !== '' || eventCode !== undefined}
	{#if viewField}
	<!-- <div in:fade="{{delay: 0, duration: 400, x: 100, y: 0, opacity: 0.5, easing: quintOut}}"
		out:fade="{{delay: 0, duration: 100, x: 100, y: 0, opacity: 0.2}}"> -->
	<div in:scale="{{delay: 0, duration: 300, opacity: 0.5, start: 0.5, easing: quintOut}}"
		out:fade="{{duration: 100, easing: linear}}">
		<PosScout close={closeField}/>
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
			<!-- Dialog Open: {open} -->
			<!-- <div class="teamNumber">{teamNumber}</div>
			<div class="teamNumber">drive train{robotInfo.driveTrain}</div>
			<div class="teamNumber">{robotInfo.climbRange}</div>
			<div class="teamNumber">{viewportWidth}</div>
			<div class="teamNumber">{viewportHeight}</div> -->
			<div class="section-title">Team</div>
			<div class="field-section">
				<div class="inputField">
					<div class="field-name">Aliance</div>
					<Select bind:value={alliance}>
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
					<div class="field-name">Level 1 Cone Attempts</div>
					<CounterInput bind:count={aLvl1ConeAttempts}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 1 Cone Scored</div>
					<CounterInput bind:count={aLvl1ConeScored}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 1 Cube Attempts</div>
					<CounterInput bind:count={aLvl1CubeAttempts}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 1 Cube Scored</div>
					<CounterInput bind:count={aLvl1CubeScored}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 2 Cone Attempts</div>
					<CounterInput bind:count={aLvl2ConeAttempts}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 2 Cone Scored</div>
					<CounterInput bind:count={aLvl2ConeScored}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 2 Cube Attempts</div>
					<CounterInput bind:count={aLvl2CubeAttempts}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 2 Cube Scored</div>
					<CounterInput bind:count={aLvl2CubeScored}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 3 Cone Attempts</div>
					<CounterInput bind:count={aLvl3ConeAttempts}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 3 Cone Scored</div>
					<CounterInput bind:count={aLvl3ConeScored}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 3 Cube Attempts</div>
					<CounterInput bind:count={aLvl3CubeAttempts}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 3 Cube Scored</div>
					<CounterInput bind:count={aLvl3CubeScored}/>
				</div>
				<div class="inputField">
					<div class="field-name">Docked</div>
					<CheckBoxField bind:checked={aDocked}/>
				</div>
				<div class="inputField">
					<div class="field-name">Engaged</div>
					<CheckBoxField bind:checked={aEngaged}/>
				</div>
				<!-- <div class="inputField">
					<div class="field-name">Shooting Positions</div>
					<div on:click={openField} class="material-icons btn">gps_fixed</div>
				</div> -->
			</div>
			<div class="section-title">Teleop</div>
			<div class="field-section">
				<div class="inputField">
					<div class="field-name">Level 1 Cone Attempts</div>
					<CounterInput bind:count={tLvl1ConeAttempts}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 1 Cone Scored</div>
					<CounterInput bind:count={tLvl1ConeScored}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 1 Cube Attempts</div>
					<CounterInput bind:count={tLvl1CubeAttempts}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 1 Cube Scored</div>
					<CounterInput bind:count={tLvl1CubeScored}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 2 Cone Attempts</div>
					<CounterInput bind:count={tLvl2ConeAttempts}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 2 Cone Scored</div>
					<CounterInput bind:count={tLvl2ConeScored}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 2 Cube Attempts</div>
					<CounterInput bind:count={tLvl2CubeAttempts}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 2 Cube Scored</div>
					<CounterInput bind:count={tLvl2CubeScored}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 3 Cone Attempts</div>
					<CounterInput bind:count={tLvl3ConeAttempts}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 3 Cone Scored</div>
					<CounterInput bind:count={tLvl3ConeScored}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 3 Cube Attempts</div>
					<CounterInput bind:count={tLvl3CubeAttempts}/>
				</div>
				<div class="inputField">
					<div class="field-name">Level 3 Cube Scored</div>
					<CounterInput bind:count={tLvl3CubeScored}/>
				</div>
				<div class="inputField">
					<div class="field-name">Docked</div>
					<CheckBoxField bind:checked={tDocked}/>
				</div>
				<div class="inputField">
					<div class="field-name">Engaged</div>
					<CheckBoxField bind:checked={tEngaged}/>
				</div>
			</div>
			<Button on:click={saveMatch} variant="raised">
				<Label>Save</Label>
			</Button>
		</div>
		{:else}
		<div class="default-msg">Add a team</div>
		{/if}

	{/if}
	{:else}
		<TopAppBar appBarTitle="Scouting"/>
		<div class="default-msg"><div>Event is not set</div></div>
{/if}
<Dialog bind:open={openSetTeam} aria-labelledby="event-title" aria-describedby="event-content" on:SMUIDialog:closed={closeHandler}>
	<Title id="event-title">Set Team</Title>
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
			<Label>Add</Label>
		</Button>
	</Actions>
</Dialog>

<script>
	import { scale, fade, blur } from 'svelte/transition';
	import { quintOut, linear } from 'svelte/easing';
	import PosScout from './PosScout.svelte'
	import TopAppBar from './TopAppBar.svelte'
	import Tab, { Label } from '@smui/tab'
	import IconButton from '@smui/icon-button'
	import TabBar from '@smui/tab-bar'
	import Button from '@smui/button'
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

	let teamNumber = 0
	let openSetTeam = false
	let robotInfo = {}
	let viewField = false
	let matchNumber = 0
	let active = ''
	let eventCode = ''
	st.currentEvent.subscribe(val => {
		eventCode = val
	})

	let alliance = ''
	let partner1 = ''
	let partner2 = ''
	// Auton Scoring
	let aLvl1ConeAttempts = 0
	let aLvl1ConeScored = 0
	let aLvl1CubeAttempts = 0
	let aLvl1CubeScored = 0
	let aLvl2ConeAttempts = 0
	let aLvl2ConeScored = 0
	let aLvl2CubeAttempts = 0
	let aLvl2CubeScored = 0
	let aLvl3ConeAttempts = 0
	let aLvl3ConeScored = 0
	let aLvl3CubeAttempts = 0
	let aLvl3CubeScored = 0
	let aDocked = false
	let aEngaged = false
	let aMobility = false

	// Teleop Scoring
	let tLvl1ConeAttempts = 0
	let tLvl1ConeScored = 0
	let tLvl1CubeAttempts = 0
	let tLvl1CubeScored = 0
	let tLvl2ConeAttempts = 0
	let tLvl2ConeScored = 0
	let tLvl2CubeAttempts = 0
	let tLvl2CubeScored = 0
	let tLvl3ConeAttempts = 0
	let tLvl3ConeScored = 0
	let tLvl3CubeAttempts = 0
	let tLvl3CubeScored = 0
	let tDocked = false
	let tEngaged = false
	let tParked = false

	let teams = []

	let viewportHeight = window.innerHeight;
	let viewportWidth = window.innerWidth;

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
		aLvl1ConeAttempts = 0
		aLvl1ConeScored = 0
		aLvl1CubeAttempts = 0
		aLvl1CubeScored = 0
		aLvl2ConeAttempts = 0
		aLvl2ConeScored = 0
		aLvl2CubeAttempts = 0
		aLvl2CubeScored = 0
		aLvl3ConeAttempts = 0
		aLvl3ConeScored = 0
		aLvl3CubeAttempts = 0
		aLvl3CubeScored = 0
		aDocked = false
		aEngaged = false
		aMobility = false

		// Teleop Scoring
		tLvl1ConeAttempts = 0
		tLvl1ConeScored = 0
		tLvl1CubeAttempts = 0
		tLvl1CubeScored = 0
		tLvl2ConeAttempts = 0
		tLvl2ConeScored = 0
		tLvl2CubeAttempts = 0
		tLvl2CubeScored = 0
		tLvl3ConeAttempts = 0
		tLvl3ConeScored = 0
		tLvl3CubeAttempts = 0
		tLvl3CubeScored = 0
		tDocked = false
		tEngaged = false
		tParked = false
	}

	function openField() {
		viewField = true
	}

	function closeField() {
		viewField = false
	}

	function saveMatch() {
		const matchData = {
			allianceColor: alliance,
			teamPartner1: partner1,
			teamPartner2: partner2,
			// Auton Scoring
			autoLvl1ConeAttempts: aLvl1ConeAttempts,
			autoLvl1ConeScored: aLvl1ConeScored,
			autoLvl1CubeAttempts: aLvl1CubeAttempts,
			autoLvl1CubeScored: aLvl1CubeScored,
			autoLvl2ConeAttempts: aLvl2ConeAttempts,
			autoLvl2ConeScored: aLvl2ConeScored,
			autoLvl2CubeAttempts: aLvl2CubeAttempts,
			autoLvl2CubeScored: aLvl2CubeScored,
			autoLvl3ConeAttempts: aLvl3ConeAttempts,
			autoLvl3ConeScored: aLvl3ConeScored,
			autoLvl3CubeAttempts: aLvl3CubeAttempts,
			autoLvl3CubeScored: aLvl3CubeScored,
			autoDocked: aDocked,
			autoEngaged: aEngaged,
			autoMobility: aMobility,

			// Teleop Scoring
			teleopLvl1ConeAttempts: tLvl1ConeAttempts,
			teleopLvl1ConeScored: tLvl1ConeScored,
			teleopLvl1CubeAttempts: tLvl1CubeAttempts,
			teleopLvl1CubeScored: tLvl1CubeScored,
			teleopLvl2ConeAttempts: tLvl2ConeAttempts,
			teleopLvl2ConeScored: tLvl2ConeScored,
			teleopLvl2CubeAttempts: tLvl2CubeAttempts,
			teleopLvl2CubeScored: tLvl2CubeScored,
			teleopLvl3ConeAttempts: tLvl3ConeAttempts,
			teleopLvl3ConeScored: tLvl3ConeScored,
			teleopLvl3CubeAttempts: tLvl3CubeAttempts,
			teleopLvl3CubeScored: tLvl3CubeScored,
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
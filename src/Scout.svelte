{#if eventCode !== 0}
	{#if viewField}
	<!-- <div in:fade="{{delay: 0, duration: 400, x: 100, y: 0, opacity: 0.5, easing: quintOut}}"
		out:fade="{{delay: 0, duration: 100, x: 100, y: 0, opacity: 0.2}}"> -->
	<div in:scale="{{delay: 0, duration: 300, opacity: 0.5, start: 0.5, easing: quintOut}}"
		out:fade="{{duration: 100, easing: linear}}">
		<PosScout close={closeField}/>
	</div>
	{:else}
		<TopAppBar appBarTitle="Scouting" iconPlacement="right" muiIcon="add" callback={addTeam} />
		{#if active !== 'None'}
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
			<div class="section-title">Auton</div>
			<div class="field-section">
				<div class="inputField">
					<div class="field-name">Level 1 Attempted</div>
					<CounterInput />
				</div>
				<div class="inputField">
					<div class="field-name">Level 1 Scored</div>
					<CounterInput />
				</div>
				<div class="inputField">
					<div class="field-name">Level 2 Attempted</div>
					<CounterInput />
				</div>
				<div class="inputField">
					<div class="field-name">Level 2 Scored</div>
					<CounterInput />
				</div>
				<div class="inputField">
					<div class="field-name">Level 3 Attempted</div>
					<CounterInput />
				</div>
				<div class="inputField">
					<div class="field-name">Level 3 Scored</div>
					<CounterInput />
				</div>
				<div class="inputField">
					<div class="field-name">Docked</div>
					<CheckBoxField />
				</div>
				<div class="inputField">
					<div class="field-name">Engaged</div>
					<CheckBoxField />
				</div>
				<!-- <div class="inputField">
					<div class="field-name">Shooting Positions</div>
					<div on:click={openField} class="material-icons btn">gps_fixed</div>
				</div> -->
			</div>
			<div class="section-title">Teleop</div>
			<div class="field-section">
				<div class="inputField">
					<div class="field-name">Level 1 Attempted</div>
					<CounterInput />
				</div>
				<div class="inputField">
					<div class="field-name">Level 1 Scored</div>
					<CounterInput />
				</div>
				<div class="inputField">
					<div class="field-name">Level 2 Attempted</div>
					<CounterInput />
				</div>
				<div class="inputField">
					<div class="field-name">Level 2 Scored</div>
					<CounterInput />
				</div>
				<div class="inputField">
					<div class="field-name">Level 3 Attempted</div>
					<CounterInput />
				</div>
				<div class="inputField">
					<div class="field-name">Level 3 Scored</div>
					<CounterInput />
				</div>
				<div class="inputField">
					<div class="field-name">Docked</div>
					<CheckBoxField />
				</div>
				<div class="inputField">
					<div class="field-name">Engaged</div>
					<CheckBoxField />
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
<Dialog bind:open aria-labelledby="event-title" aria-describedby="event-content" on:SMUIDialog:closed={closeHandler}>
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
		<Button on:click={popRobot} action="none" default>
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
	import * as db from './js/db'

	let teamNumber = 0
	let open = false
	let robotInfo = {}
	let viewField = false
	let matchNumber = 0
	let active = '0'
	export let eventCode = 1

	let teams = ['None', '0']

	let viewportHeight = window.innerHeight;
	let viewportWidth = window.innerWidth;

	// Show "add team" dialog
	function addTeam() {
		open = true;
		console.log("addTeam called")
	}

	function closeHandler() {
		open = false;
	}

	function popRobot() {
		if (teams[0] === 'None') {
			teams = [`${teamNumber} #${matchNumber}`]
			active = teams[teams.length-1]
		} else {
			teams = [...teams, `${teamNumber} #${matchNumber}`]
			active = teams[teams.length-1]
		}
	}

	function openField() {
		viewField = true
	}

	function closeField() {
		viewField = false
	}

	function saveMatch() {
		console.log('save match')
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
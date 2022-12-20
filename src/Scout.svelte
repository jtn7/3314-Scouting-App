{#if viewField}
<!-- <div in:fade="{{delay: 0, duration: 400, x: 100, y: 0, opacity: 0.5, easing: quintOut}}"
	out:fade="{{delay: 0, duration: 100, x: 100, y: 0, opacity: 0.2}}"> -->
<div in:scale="{{delay: 0, duration: 300, opacity: 0.5, start: 0.5, easing: quintOut}}"
	out:fade="{{duration: 100, easing: linear}}">
	<PosScout close={closeField}/>
</div>
{:else}
	<TopAppBar appBarTitle="Scouting" iconPlacement="right" muiIcon="add" callback={addTeam} />
	<div class="scout-body">
		{open}
		<div class="teamNumber">{valueTypeNumber}</div>
		<div class="teamNumber">{robotInfo.driveTrain}</div>
		<div class="teamNumber">{robotInfo.climbRange}</div>
		<div class="teamNumber">{viewportWidth}</div>
		<div class="teamNumber">{viewportHeight}</div>
		<div class="field-section">
			<div class="inputField">
				<div class="field-name">High Goal</div>
				<CounterInput />
			</div>
			<div class="inputField">
				<div class="field-name">Low Goal</div>
				<CounterInput />
			</div>
			<div class="inputField">
				<div class="field-name">Auto High</div>
				<CounterInput />
			</div>
			<div class="inputField">
				<div class="field-name">Auto Low</div>
				<CounterInput />
			</div>
			<div class="inputField">
				<div class="field-name">Shooting Positions</div>
				<div on:click={openField} class="material-icons btn">gps_fixed</div>
			</div>
		</div>
	</div>
{/if}
<Dialog bind:open aria-labelledby="event-title" aria-describedby="event-content" on:SMUIDialog:closed={closeHandler}>
	<Title id="event-title">Add Team to Scout</Title>
	<Content id="event-content">
		<Textfield bind:value={valueTypeNumber} label="Team Number" type="number" />
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
	import CounterInput from './CounterInput.svelte'
	import * as db from './js/db'

	let valueTypeNumber = 0;
	let open = false;
	let robotInfo = {}
	let viewField = false

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
		db.getRobotInfo(valueTypeNumber).then((robot) => {
			robotInfo = robot
			console.log("this is the robot:", robot)
		}).catch((reason) => {
			console.log("error getting robotInfo:", reason)
		})
	}

	function openField() {
		viewField = true
	}

	function closeField() {
		viewField = false
	}
</script>

<style>
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
	}

	.teamNumber {
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.field-section {
		/* border: 1px solid rgba(214, 0, 0, 0.2); */
		/* border-radius: 5px; */
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
		border-radius: 30px;
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
		border-top-left-radius: 30px;
		border-top-right-radius: 30px;
	}

	.inputField:last-child {
		border-bottom: 0;
		border-bottom-left-radius: 30px;
		border-bottom-right-radius: 30px;
	}

	.inputField > .field-name {
		/* padding-top: 3px; */
		align-self: center;
	}
</style>
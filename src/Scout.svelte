<TopAppBar appBarTitle="Scouting" iconPlacement="right" muiIcon="add" callback={addTeam} />
<div class="scout-body">
	{open}
	<div class="teamNumber">{valueTypeNumber}</div>
	<div class="teamNumber">{robotInfo.driveTrain}</div>
	<div class="teamNumber">{robotInfo.climbRange}</div>
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
	</div>
</div>
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
	import TopAppBar from './TopAppBar.svelte'
	import Tab, { Label } from '@smui/tab'
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
</script>

<style>
	.scout-body {
		display: flex;
		flex-direction: column;
		padding: 1rem 2rem;
	}

	.teamNumber {
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.field-section {
		/* border: 1px solid rgba(214, 0, 0, 0.2); */
		/* border-radius: 5px; */
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

		border-bottom: 1px solid rgba(214, 0, 0, 0.2);
		
		padding: 0.5rem;
	}

	.inputField:first-child {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	.inputField:last-child {
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.inputField > .field-name {
		padding-top: 3px;
	}
</style>
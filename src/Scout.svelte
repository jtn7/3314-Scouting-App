<TopAppBar appBarTitle="Scouting" iconPlacement="right" muiIcon="add" callback={addTeam} />
<div class="scout-body">
	{open}
	<div class="teamNumber">{valueTypeNumber}</div>
	<div class="field-section">
		<NumberField fieldName="High Goal" />
		<NumberField fieldName="Low Goal" />
		<NumberField fieldName="Auton High" />
		<NumberField fieldName="Auton Low" />
		<NumberField fieldName="Auton Human High" />
		<NumberField fieldName="Auton Human Low" />
		<CheckBoxField fieldName="Attempted Climb" />
	</div>
</div>
<Dialog bind:open aria-labelledby="event-title" aria-describedby="event-content" on:SMUIDialog:closed={closeHandler}>
	<Title id="event-title">Add Team to Scout</Title>
	<Content id="event-content">
		<Textfield bind:value={valueTypeNumber} label="Team Number" type="number" />
	</Content>
	<Actions>
		<Button action="none" default>
			<Label>Add</Label>
		</Button>
	</Actions>
</Dialog>

<script>
	import TopAppBar from './TopAppBar.svelte';
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import Button from '@smui/button';
	import NumberField from './NumberField.svelte';
	import CheckBoxField from './CheckBoxField.svelte';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Textfield from '@smui/textfield';

	let valueTypeNumber = 0;
	let open = false;

	// Show "add team" dialog
	function addTeam() {
		open = true;
		console.log("addTeam called")
	}

	function closeHandler() {
		open = false;
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
		border: 1px solid rgba(214, 0, 0, 0.2);
		border-radius: 5px;
	}

	.tabbar {
		/* background-color: var(--mdc-theme-primary); */
	}

	.white {
		color: white !important;
	}
</style>
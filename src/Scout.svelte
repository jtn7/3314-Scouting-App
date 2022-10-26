<TopAppBar appBarTitle="Scouting" muiIcon="add" />
<div class="scout-body">
	<div class="teamNumber">3314</div>
	<div class="field-section">
		<NumberField fieldName="High Goal"/>
		<NumberField fieldName="Low Goal"/>
		<NumberField fieldName="Auton High"/>
		<NumberField fieldName="Auton Low"/>
		<NumberField fieldName="Auton Human High"/>
		<NumberField fieldName="Auton Human Low"/>
		<CheckBoxField fieldName="Attempted Climb"/>
	</div>
</div>

<script>
	import TopAppBar from './TopAppBar.svelte'
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import Button from '@smui/button';
	import NumberField from './NumberField.svelte'
	import CheckBoxField from './CheckBoxField.svelte'
</script>

<style>
	.scout-body {
		display: flex;
		flex-direction: column;
		padding: 1rem 2rem;
		height: 100em;
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
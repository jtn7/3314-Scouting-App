
{#if teams}
	<TeamsBody/>
{:else}
	<Scout/>
{/if}
<BottomAppBar/>


<script>
	import { teamsTab } from './js/stores.js'
	import TopAppBar from './TopAppBar.svelte';
	import BottomAppBar from './BottomAppBar.svelte';
	import TeamsBody from './TeamsBody.svelte';
	import Scout from './Scout.svelte';
	let teams = true;
	let teamList = [];

	teamsTab.subscribe(value => {
		teams = value;
	})

	// Shows add team dialog
	function addTeam() {
		console.log(teamList)
	}
</script>

<style>
	.body {
		padding: 0.7rem 0.0rem;
	}
</style>
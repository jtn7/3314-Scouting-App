
{#if teams}
	<TeamsBody/>
{:else}
	<Scout/>
{/if}
<BottomAppBar/>


<script>
	import { teamsTab } from './js/stores'
	import TopAppBar from './TopAppBar.svelte';
	import BottomAppBar from './BottomAppBar.svelte';
	import TeamsBody from './TeamsBody.svelte';
	import Scout from './Scout.svelte';
	let teams = true;
	let teamList = [];

	teamsTab.subscribe(value => {
		teams = value;
	})
</script>

<style>
	.body {
		padding: 0.7rem 0.0rem;
	}
</style>
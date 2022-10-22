<TopAppBar appBarTitle="Scouting" muiIcon="add"/>
<div class="tabbar">
	{#if teamList.length > 0}
	<TabBar tabs={teamList} let:tab bind:active>
		<!-- Note: the `tab` property is required! -->
		<Tab {tab}>
			<Label>{tab}</Label>
		</Tab>
	</TabBar>
	{/if}
</div>

<script>
	import TopAppBar from './TopAppBar.svelte'
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import Button from '@smui/button';
	export let eTeamsList;
	let teamList = []
	teamList = eTeamsList;

	let active = '';
	console.log(eTeamsList)
</script>

<style>
.body {
	height: 100em;
}

.tabbar {
	/* background-color: var(--mdc-theme-primary); */
}

.white {
	color: white !important;
}
</style>

<div class="body">

</div>

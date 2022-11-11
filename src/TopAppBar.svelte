<div class="top-app-bar-container">
	<TopAppBar variant="fixed">
		<Row>
			<Section>
				<Title>{appBarTitle}</Title>
			</Section>
			<Section align="end" toolbar>
				<IconButton on:click={callTheCallback} class="material-icons" aria-label="Options" touch>{muiIcon}</IconButton>
				<!-- {#if showMore}
				<List class="more-vert" dense>
					<Item on:SMUI:action={() => showDialog()}>
						<Graphic class="material-icons">add</Graphic>
						<Text>Add Team</Text>
					</Item>
				</List>
				{/if} -->
			</Section>
		</Row>
	</TopAppBar>
</div>

<script>
	import IconButton from '@smui/icon-button';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import List, { Item, Graphic, Text } from '@smui/list';
	export let appBarTitle;
	export let muiIcon;
	export let callback;
	let showMore = false;

	function blah() {
		showMore = true;
	}

	function showDialog() {
		console.log("dialog Shown")
	}

	function callTheCallback() {
		callback()
	}
</script>

<style>
	* :global(.more-vert) {
		z-index: 4;
		background-color: white;
		color: black;
	}

	.top-app-bar-container {
		width: 100%;
		background-color: var(--mdc-theme-background, #fff);
		padding-bottom: 4rem;
	}

	@media all and (max-width: 599px) {
		.top-app-bar-container {
			padding-bottom: 3.5rem;
		}
	}
</style>
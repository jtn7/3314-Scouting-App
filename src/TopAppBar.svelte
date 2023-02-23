<div class="top-app-bar-container">
	<TopAppBar variant="fixed">
		<Row>
			{#if iconPlacement === "left"}
			<Section toolbar>
				<IconButton on:click={callTheCallback} class="material-icons" aria-label="Options" touch>{muiIcon}</IconButton>
				<Title>{appBarTitle}</Title>
			</Section>
			{:else if iconPlacement === "right"}
			<Section>
				<Title>{appBarTitle}</Title>
			</Section>
			<Section align="end" toolbar>
				<IconButton on:click={callTheCallback} class="material-icons" aria-label="Options" touch>{muiIcon}</IconButton>
			</Section>
			{:else}
			<Section toolbar>
				<Title>{appBarTitle}</Title>
			</Section>
			{/if}
		</Row>
	</TopAppBar>
</div>

<script>
	import IconButton from '@smui/icon-button'
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar'
	import List, { Item, Graphic, Text } from '@smui/list'
	export let appBarTitle = ""
	export let muiIcon = ""
	export let callback = () => {}
	export let iconPlacement = ""
	let showMore = false

	function blah() {
		showMore = true
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
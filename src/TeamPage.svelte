
<TopAppBar appBarTitle="{teamNumber} - {teamName}" iconPlacement="left" muiIcon="arrow_back" callback={close} />
<div class="body">

	<div class="robot-section">
		<div class="title">Robot Info</div>
		<div class="robot-info">
			<div class="info-entry">
				<div>Drive Train</div>
			</div>
			<div class="info-entry">
				<div>Motor Type</div>
			</div>
			<div class="info-entry">
				<div>Max Grid Level</div>
			</div>
			<div class="info-entry">
				<div>Can score cones</div>
			</div>
			<div class="info-entry">
				<div>Can score cubes</div>
			</div>
			<div class="info-entry">
				<div>Can balance</div>
			</div>
			<div class="info-entry">
				<div>Can player station</div>
			</div>
			<div class="info-entry">
				<div>Plays Defense</div>
			</div>
		</div>
	</div>

	<div class="info-section">
		<div class="title">Performance Info</div>
		<div class="robot-info">
			<div class="info-entry">
				<div>Avg Score</div>
			</div>
			<div class="info-entry">
				<div>Avg Auton</div>
			</div>
		</div>
	</div>
</div>

<script>
	import TopAppBar from './TopAppBar.svelte'
	export let teamData = {}
	export let close

	let teamNumber = teamData.teamNumber
	let teamName = teamData.teamName
</script>

<style>
	.body {
		margin: 1rem 1rem 5rem;
		font-size: 1rem;
	}

	.robot-section {
		margin-bottom: 1.2rem;
	}

	.title {
		font-size: 1.2rem;
		margin-left: 0.5rem;
		margin-bottom: 0.3em;
	}

	.robot-info{
		display: flex;
		flex-direction: column;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
		border-radius: 20px;
		font-size: 0.9rem;
	}

	.info-entry {
		justify-content: space-between;
		background-color: white;

		/* border: 1px solid rgba(214, 0, 0, 0.2); */
		border-bottom: 1px solid rgba(0, 0, 0, 0.087);
		
		padding: 1rem;
	}

	.info-entry:first-child {
		border-top-left-radius:  20px;
		border-top-right-radius: 20px;
	}

	.info-entry:last-child {
		border-bottom: 0;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
</style>
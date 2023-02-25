
<TopAppBar appBarTitle="{teamNumber} - {teamName}" iconPlacement="left" muiIcon="arrow_back" callback={close} />
<div class="body">

	<div class="robot-section">
		<div class="title">Robot Info</div>
		<div class="robot-info">
			<div class="info-entry">
				<div>Drivetrain</div>
				<div>Mechanum</div>
			</div>
			<div class="info-entry">
				<div>Motor Type</div>
				<div>Jags</div>
			</div>
			<div class="info-entry">
				<div>Weight</div>
				<div>123</div>
			</div>
			<div class="info-entry">
				<div>Dimensions</div>
				<div>123x20x321</div>
			</div>
			<div class="info-entry">
				<div>Autonomous Description</div>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cupiditate, nostrum perspiciatis error similique vitae in natus nam rerum earum deleniti ea libero eaque ipsam minus sequi, voluptas molestias doloribus!
				</div>
			</div>
			<div class="info-entry">
				<div>Can pick up from floor</div>
				<div>Yes</div>
			</div>
			<div class="info-entry">
				<div>Can pick up from shelf</div>
				<div>No</div>
			</div>
			<div class="info-entry">
				<div>Can score cones on level(s)</div>
				<div>1, 2, 3</div>
			</div>
			<div class="info-entry">
				<div>Can score cubes on level(s)</div>
				<div>1, 2, 3</div>
			</div>
			<div class="info-entry">
				<div>Can dock in auto</div>
				<div>No</div>
			</div>
			<div class="info-entry">
				<div>Can engage in auto</div>
				<div>No</div>
			</div>
			<div class="info-entry">
				<div>Mobility in auto</div>
				<div>Yes</div>
			</div>
			<div class="info-entry">
				<div>Can dock in teleop</div>
				<div>Yes</div>
			</div>
			<div class="info-entry">
				<div>Can engage in teleop</div>
				<div>Yes</div>
			</div>
			<div class="info-entry">
				<div>Defense bot</div>
				<div>No</div>
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
	<div class="info-section">
		<div class="title">Match History</div>
		<div class="robot-info">
			<div class="info-entry">
				<div>Match 1</div>
				<div>3314, 555, 1676</div>
			</div>
			<div class="info-entry">
				<div>Match 2</div>
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
	.info-section {
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
		display: flex;
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

<TopAppBar appBarTitle="{teamNumber} - {teamName}" iconPlacement="left" muiIcon="arrow_back" callback={close} />
<div class="body">

	<div class="robot-section">
		<div class="section-title">Robot Info</div>
		<div class="robot-info">
			<div class="info-entry two-row">
				<div class="title">Drivetrain</div>
				<div class="center">
					<Select bind:value={drivetrain}>
						<Option value="mechanum">Mechanum</Option>
						<Option value="swerve">Swerve</Option>
						<Option value="kitbot">6-Wheel Tank (Kit Bot)</Option>
						<Option value="6wheel">6-Wheel Tank</Option>
						<Option value="8wheel">8-Wheel Tank</Option>
						<Option value="westcoast">4 Traction 2 Omni (West Coast)</Option>
					</Select>
				</div>
			</div>
			<div class="info-entry two-row">
				<div class="title">Drivetrain Motors</div>
				<div class="center">
					<Select bind:value={motors}>
						<Option value="falcon">Falcon</Option>
						<Option value="neo">Neo</Option>
						<Option value="falconNeo">Falcon & Neo (Swerve)</Option>
						<Option value="cim">CIM (Kit Bot)</Option>
						<Option value="775">775 Pro</Option>
						<Option value="other">Other</Option>
					</Select>
				</div>
			</div>
			<div class="info-entry">
				<div>Weight</div>
				<Textfield bind:value={weight} label="Weight" type="number" />
			</div>
			<div class="info-entry">
				<div>Dimensions</div>
				<div class="dimensions">
					<Textfield bind:value={robotLength} label="L" type="number"/>
					<Textfield bind:value={robotWidth} label="W" type="number"/>
					<Textfield bind:value={robotHeight} label="H" type="number"/>
				</div>
			</div>
			<div class="info-entry">
				<div>Pick up cone from floor</div>
				<Switch bind:checked={pickupFloorCone} icons={false} />
			</div>
			<div class="info-entry">
				<div>Pick up cube from floor</div>
				<Switch bind:checked={pickupFloorCube} icons={false} />
			</div>
			<div class="info-entry">
				<div>Grab cone from shelf</div>
				<Switch bind:checked={pickupShelfCone} icons={false} />
			</div>
			<div class="info-entry">
				<div>Grab cube from shelf</div>
				<Switch bind:checked={pickupShelfCube} icons={false} />
			</div>
			<div class="info-entry two-row">
				<div class="title">Can score cones on level(s)</div>
				<div class="lvl-scoring">
					<div class="switch-box">
						<div>Level 1</div>
						<Switch bind:checked={coneLvl1} icons={false} />
					</div>
					<div class="switch-box">
						<div>Level 2</div>
						<Switch bind:checked={coneLvl2} icons={false} />
					</div>
					<div class="switch-box">
						<div>Level 3</div>
						<Switch bind:checked={coneLvl3} icons={false} />
					</div>
				</div>
			</div>
			<div class="info-entry two-row">
				<div class="title">Can score cubes on level(s)</div>
				<div class="lvl-scoring">
					<div class="switch-box">
						<div>Level 1</div>
						<Switch bind:checked={cubeLvl1} icons={false} />
					</div>
					<div class="switch-box">
						<div>Level 2</div>
						<Switch bind:checked={cubeLvl2} icons={false} />
					</div>
					<div class="switch-box">
						<div>Level 3</div>
						<Switch bind:checked={cubeLvl3} icons={false} />
					</div>
				</div>
			</div>
			<div class="info-entry">
				<div>Can dock in auto</div>
				<Switch bind:checked={autoDock} icons={false} />
			</div>
			<div class="info-entry">
				<div>Can engage in auto</div>
				<Switch bind:checked={autoEngage} icons={false} />
			</div>
			<div class="info-entry">
				<div>Mobility in auto</div>
				<Switch bind:checked={autoMobility} icons={false} />
			</div>
			<div class="info-entry">
				<div>Can dock in teleop</div>
				<Switch bind:checked={teleopDock} icons={false} />
			</div>
			<div class="info-entry">
				<div>Can engage in teleop</div>
				<Switch bind:checked={teleopEngage} icons={false} />
			</div>
			<div class="info-entry">
				<div>Defense bot</div>
				<Switch bind:checked={playsDefense} icons={false} />
			</div>
			<div class="info-entry">
				<div>What is their primary strategy</div>
			</div>
		</div>
	</div>

	<!-- <div class="info-section">
		<div class="section-title">Performance Info</div>
		<div class="robot-info">
			<div class="info-entry">
				<div>Avg Score</div>
			</div>
			<div class="info-entry">
				<div>Avg Auton</div>
			</div>
		</div>
	</div> -->
	<!-- <div class="info-section">
		<div class="section-title">Match History</div>
		<div class="robot-info">
			<div class="info-entry">
				<div>Match 1</div>
				<div>3314, 555, 1676</div>
			</div>
			<div class="info-entry">
				<div>Match 2</div>
			</div>
		</div>
	</div> -->
	<Button on:click={saveRobotData} variant="raised">
		<Label>Save</Label>
	</Button>
</div>

<script>
	import TopAppBar from './TopAppBar.svelte'
	import Button, { Label } from '@smui/button'
	import Select, { Option } from '@smui/select';
	import Switch from '@smui/switch';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import * as fs from './js/firestore'

	// Input for team number and name
	export let teamData = {}
	// function that returns this view to the teams page
	export let close

	let teamNumber = teamData.teamNumber
	let teamName = teamData.teamName

	let drivetrain = ''
	let motors = ''
	let weight = 0
	let dimensions = ''
	let robotLength = ''
	let robotWidth = ''
	let robotHeight = ''
	let pickupFloorCone = false
	let pickupFloorCube = false
	let pickupShelfCone = false
	let pickupShelfCube = false

	let coneLvl1 = false
	let coneLvl2 = false
	let coneLvl3 = false

	let cubeLvl1 = false
	let cubeLvl2 = false
	let cubeLvl3 = false

	let autoDock = false
	let autoEngage = false
	let autoMobility = false

	let teleopDock = false
	let teleopEngage = false

	let playsDefense = false

	getRobotData()
	function getRobotData() {
		fs.getRobotData(teamNumber).then(robotData => {
			drivetrain = robotData.drivetrain
			motors = robotData.motors
			weight = robotData.weight
			dimensions = robotData.dimensions
			pickupFloorCone = robotData.pickupFloorCone
			pickupFloorCube = robotData.pickupFloorCube
			pickupShelfCone = robotData.pickupShelfCone
			pickupShelfCube = robotData.pickupShelfCube
			coneLvl1 = robotData.coneLvl1
			coneLvl2 = robotData.coneLvl2
			coneLvl3 = robotData.coneLvl3
			cubeLvl1 = robotData.cubeLvl1
			cubeLvl2 = robotData.cubeLvl2
			cubeLvl3 = robotData.cubeLvl3
			autoDock = robotData.autoDock
			autoEngage = robotData.autoEngage
			autoMobility = robotData.autoMobility
			teleopDock = robotData.teleopDock
			teleopEngage = robotData.teleopEngage
			playsDefense = robotData.playsDefense
		}).catch(err => console.log('failed to get robot data\n', err))
	}

	function saveRobotData() {
		dimensions = `${robotLength}x${robotWidth}x${robotHeight}`
		let robotData = {
			drivetrain,
			motors,
			weight,
			dimensions,
			pickupFloorCone,
			pickupFloorCube,
			pickupShelfCone,
			pickupShelfCube,
			coneLvl1,
			coneLvl2,
			coneLvl3,
			cubeLvl1,
			cubeLvl2,
			cubeLvl3,
			autoDock,
			autoEngage,
			autoMobility,
			teleopDock,
			teleopEngage,
			playsDefense
		}
		console.log(robotData)
		fs.saveRobotData(teamNumber, robotData)
	}
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

	.section-title {
		font-size: 1.3rem;
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
		align-items: center;
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

	.info-entry .vert-center {
		vertical-align: middle;
	}

	.info-entry .dimensions {
		display: flex;
		gap: 1rem;
	}

	.select-box {
		width: 9rem;
	}

	.two-row {
		display: block;
	}

	.two-row > .title {
		font-size: 1rem;
		margin-bottom: 1rem;
		text-align: center;
	}

	.two-row > .lvl-scoring {
		display: flex;
		justify-content: space-around;
	}

	.two-row > .center {
		display: flex;
		justify-content: space-around;
	}

</style>
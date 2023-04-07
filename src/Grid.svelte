<div class="top-bar">
	<div class="undo">
		<i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true" on:click={toggleAttemptMode}>cancel</i>
		<i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true" on:click={toggleTeam}>account_box</i>
		<i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true" on:click={rotateGrid}>sync</i>
	</div>
	<div on:click={close} class="close">
		<i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true">close</i>
	</div>
</div>
<div class="component-body">
	<div class="title">SUBSTATION</div>
	<div bind:this={gridElem} class="grid-container left">
		<div bind:this={lvl3Elem} class="level-3 grid">
			<div class="cone"
				on:click="{(e) => handleCone(e, 2, 8)}"
				use:longpress on:longpress="{() => resetAttempts(2, 8)}">
				<div class="cylinder"></div>
				<div class="attempt">
					{#if attemptGrid[2][8] !== 0}{attemptGrid[2][8]}{/if}
				</div>
			</div>
			<div class="cube"
				on:click="{(e) => handleCube(e, 2, 7)}"
				use:longpress on:longpress="{() => resetAttempts(2, 7)}">
				<div class="none"></div>
				<div class="attempt">{#if attemptGrid[2][7] !== 0}{attemptGrid[2][7]}{/if}</div>
			</div>
			<div class="cone"
				on:click="{(e) => handleCone(e, 2, 6)}"
				use:longpress on:longpress="{() => resetAttempts(2, 6)}">
				<div class="cylinder"></div>
				<div class="attempt">{#if attemptGrid[2][6] !== 0}{attemptGrid[2][6]}{/if}</div>
			</div>
			<div class="cone"
				on:click="{(e) => handleCone(e, 2, 5)}"
				use:longpress on:longpress="{() => resetAttempts(2, 5)}">
				<div class="cylinder"></div>
				<div class="attempt">{#if attemptGrid[2][5] !== 0}{attemptGrid[2][5]}{/if}</div>
			</div>
			<div class="cube"
				on:click="{(e) => handleCube(e, 2, 4)}"
				use:longpress on:longpress="{() => resetAttempts(2, 4)}">
				<div class="none"></div>
				<div class="attempt">{#if attemptGrid[2][4] !== 0}{attemptGrid[2][4]}{/if}</div>
			</div>
			<div class="cone"
				on:click="{(e) => handleCone(e, 2, 3)}"
				use:longpress on:longpress="{() => resetAttempts(2, 3)}">
				<div class="cylinder"></div>
				<div class="attempt">{#if attemptGrid[2][3] !== 0}{attemptGrid[2][3]}{/if}</div>
			</div>
			<div class="cone"
				on:click="{(e) => handleCone(e, 2, 2)}"
				use:longpress on:longpress="{() => resetAttempts(2, 2)}">
				<div class="cylinder"></div>
				<div class="attempt">{#if attemptGrid[2][2] !== 0}{attemptGrid[2][2]}{/if}</div>
			</div>
			<div class="cube"
				on:click="{(e) => handleCube(e, 2, 1)}"
				use:longpress on:longpress="{() => resetAttempts(2, 1)}">
				<div class="none"></div>
				<div class="attempt">{#if attemptGrid[2][1] !== 0}{attemptGrid[2][1]}{/if}</div>
			</div>
			<div class="cone"
				on:click="{(e) => handleCone(e, 2, 0)}"
				use:longpress on:longpress="{() => resetAttempts(2, 0)}">
				<div class="cylinder"></div>
				<div class="attempt">{#if attemptGrid[2][0] !== 0}{attemptGrid[2][0]}{/if}</div>
			</div>
		</div>
		<div bind:this={lvl2Elem} class="level-2 grid">
			<div class="cone"
				on:click="{(e) => handleCone(e, 1, 8)}"
				use:longpress on:longpress="{() => resetAttempts(1, 8)}">
				<div class="cylinder"></div>
				<div class="attempt">{#if attemptGrid[1][8] !== 0}{attemptGrid[1][8]}{/if}</div>
			</div>
			<div class="cube"
				on:click="{(e) => handleCube(e, 1, 7)}"
				use:longpress on:longpress="{() => resetAttempts(1, 7)}">
				<div class="none"></div>
				<div class="attempt">{#if attemptGrid[1][7] !== 0}{attemptGrid[1][7]}{/if}</div>
			</div>
			<div class="cone"
				on:click="{(e) => handleCone(e, 1, 6)}"
				use:longpress on:longpress="{() => resetAttempts(1, 6)}">
				<div class="cylinder"></div>
				<div class="attempt">{#if attemptGrid[1][6] !== 0}{attemptGrid[1][6]}{/if}</div>
			</div>
			<div class="cone"
				on:click="{(e) => handleCone(e, 1, 5)}"
				use:longpress on:longpress="{() => resetAttempts(1, 5)}">
				<div class="cylinder"></div>
				<div class="attempt">{#if attemptGrid[1][5] !== 0}{attemptGrid[1][5]}{/if}</div>
			</div>
			<div class="cube"
				on:click="{(e) => handleCube(e, 1, 4)}"
				use:longpress on:longpress="{() => resetAttempts(1, 4)}">
				<div class="none"></div>
				<div class="attempt">{#if attemptGrid[1][4] !== 0}{attemptGrid[1][4]}{/if}</div>
			</div>
			<div class="cone"
				on:click="{(e) => handleCone(e, 1, 3)}"
				use:longpress on:longpress="{() => resetAttempts(1, 3)}">
				<div class="cylinder"></div>
				<div class="attempt">{#if attemptGrid[1][3] !== 0}{attemptGrid[1][3]}{/if}</div>
			</div>
			<div class="cone"
				on:click="{(e) => handleCone(e, 1, 2)}"
				use:longpress on:longpress="{() => resetAttempts(1, 2)}">
				<div class="cylinder"></div>
				<div class="attempt">{#if attemptGrid[1][2] !== 0}{attemptGrid[1][2]}{/if}</div>
			</div>
			<div class="cube"
				on:click="{(e) => handleCube(e, 1, 1)}"
				use:longpress on:longpress="{() => resetAttempts(1, 1)}">
				<div class="none"></div>
				<div class="attempt">{#if attemptGrid[1][1] !== 0}{attemptGrid[1][1]}{/if}</div>
			</div>
			<div class="cone"
				on:click="{(e) => handleCone(e, 1, 0)}"
				use:longpress on:longpress="{() => resetAttempts(1, 0)}">
				<div class="cylinder"></div>
				<div class="attempt">{#if attemptGrid[1][0] !== 0}{attemptGrid[1][0]}{/if}</div>
			</div>
		</div>
		<div bind:this={lvl1Elem} class="level-1 grid">
			<div class="hybrid"
				on:click="{(e) => handleHybrid(e, 0, 8)}"
				use:longpress on:longpress="{() => resetAttempts(0, 8)}">
				<div class="none"></div>
				<div class="attempt">{#if attemptGrid[0][8] !== 0}{attemptGrid[0][8]}{/if}</div>
			</div>
			<div class="hybrid"
				on:click="{(e) => handleHybrid(e, 0, 7)}"
				use:longpress on:longpress="{() => resetAttempts(0, 7)}">
					<div class="none"></div>
					<div class="attempt">{#if attemptGrid[0][7] !== 0}{attemptGrid[0][7]}{/if}</div>
			</div>
			<div class="hybrid"
				on:click="{(e) => handleHybrid(e, 0, 6)}"
				use:longpress on:longpress="{() => resetAttempts(0, 6)}">
				<div class="none"></div>
				<div class="attempt">{#if attemptGrid[0][6] !== 0}{attemptGrid[0][6]}{/if}</div>
			</div>
			<div class="hybrid"
				on:click="{(e) => handleHybrid(e, 0, 5)}"
				use:longpress on:longpress="{() => resetAttempts(0, 5)}">
				<div class="none"></div>
				<div class="attempt">{#if attemptGrid[0][5] !== 0}{attemptGrid[0][5]}{/if}</div>
			</div>
			<div class="hybrid"
				on:click="{(e) => handleHybrid(e, 0, 4)}"
				use:longpress on:longpress="{() => resetAttempts(0, 4)}">
				<div class="none"></div>
				<div class="attempt">{#if attemptGrid[0][4] !== 0}{attemptGrid[0][4]}{/if}</div>
			</div>
			<div class="hybrid"
				on:click="{(e) => handleHybrid(e, 0, 3)}"
				use:longpress on:longpress="{() => resetAttempts(0, 3)}">
				<div class="none"></div>
				<div class="attempt">{#if attemptGrid[0][3] !== 0}{attemptGrid[0][3]}{/if}</div>
			</div>
			<div class="hybrid"
				on:click="{(e) => handleHybrid(e, 0, 2)}"
				use:longpress on:longpress="{() => resetAttempts(0, 2)}">
				<div class="none"></div>
				<div class="attempt">{#if attemptGrid[0][2] !== 0}{attemptGrid[0][2]}{/if}</div>
			</div>
			<div class="hybrid"
				on:click="{(e) => handleHybrid(e, 0, 1)}"
				use:longpress on:longpress="{() => resetAttempts(0, 1)}">
				<div class="none"></div>
				<div class="attempt">{#if attemptGrid[0][1] !== 0}{attemptGrid[0][1]}{/if}</div>
			</div>
			<div class="hybrid"
				on:click="{(e) => handleHybrid(e, 0, 0)}"
				use:longpress on:longpress="{() => resetAttempts(0, 0)}">
				<div class="none"></div>
				<div class="attempt">{#if attemptGrid[0][0] !== 0}{attemptGrid[0][0]}{/if}</div>
			</div>
		</div>
	</div>
	<!-- <canvas bind:this={canvasElem}></canvas>
	<Button on:click={showQR} default>
		<Label>QR</Label>
	</Button> -->
</div>


<script>
	import Ripple from '@smui/ripple';
	import Button, { Label } from '@smui/button'
	// import QRCode from 'qrcode'
	import { onMount, onDestroy } from 'svelte';
	import { longpress } from './js/custom-actions'
	
	export let close

	// Grid level representation
	const LVL1 = 0
	const LVL2 = 1
	const LVL3 = 2

	// Piece representation
	const CONE_OTHER = 4
	const CUBE_OTHER = 3
	const CONE = 2
	const CUBE = 1
	const NONE = 0

	export let gridData = []
	export let attemptGrid = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0]
	]

	let lvl3Elem
	let lvl2Elem
	let lvl1Elem
	onMount(async() => {
		populateGrid()
	})

	// populateGrid uses the exported gridData to visually
	// update the grid component
	function populateGrid() {
		let lvl3Slots = Array.from(lvl3Elem.children).reverse()
		let lvl2Slots = Array.from(lvl2Elem.children).reverse()
		let lvl1Slots = Array.from(lvl1Elem.children).reverse()

		for (let position = 0; position < lvl1Slots.length; position++) {
			// Level 3
			const lvl3Piece = lvl3Slots[position].firstChild;
			if (gridData[LVL3][position] == CONE) {
				lvl3Piece.classList.replace('none', 'triangle')
				lvl3Piece.classList.replace('cylinder', 'triangle')
			} else if (gridData[LVL3][position] == CUBE) {
				lvl3Piece.classList.replace('none', 'square')
			} else if (gridData[LVL3][position] == CONE_OTHER) {
				lvl3Piece.classList.replace('none', 'triangle-other')
				lvl3Piece.classList.replace('cylinder', 'triangle-other')
			} else if (gridData[LVL3][position] == CUBE_OTHER) {
				lvl3Piece.classList.replace('none', 'square-other')
			}
			// Level 2
			const lvl2Piece = lvl2Slots[position].firstChild;
			if (gridData[LVL2][position] == CONE) {
				lvl2Piece.classList.replace('none', 'triangle')
				lvl2Piece.classList.replace('cylinder', 'triangle')
			} else if (gridData[LVL2][position] == CUBE) {
				lvl2Piece.classList.replace('none', 'square')
			} else if (gridData[LVL2][position] == CONE_OTHER) {
				lvl2Piece.classList.replace('none', 'triangle-other')
				lvl2Piece.classList.replace('cylinder', 'triangle-other')
			} else if (gridData[LVL2][position] == CUBE_OTHER) {
				lvl2Piece.classList.replace('none', 'square-other')
			}
			// Level 1
			const lvl1Piece = lvl1Slots[position].firstChild;
			if (gridData[LVL1][position] == CONE) {
				lvl1Piece.classList.replace('none', 'triangle')
			} else if (gridData[LVL1][position] == CUBE) {
				lvl1Piece.classList.replace('none', 'square')
			} else if (gridData[LVL1][position] == CONE_OTHER) {
				lvl1Piece.classList.replace('none', 'triangle-other')
			} else if (gridData[LVL1][position] == CUBE_OTHER) {
				lvl1Piece.classList.replace('none', 'square-other')
			}
		}
	}

	let gridElem
	export let gridLeft = true
	// rotateGrid changes the visual orientation of the grid
	function rotateGrid() {
		gridLeft = !gridLeft
		if (gridLeft)
			gridElem.classList.replace('right', 'left')
		else
			gridElem.classList.replace('left', 'right')
	}

	function updateGrid() {}

	// incrementAttempt increases the attempt number on the grid space
	function incrementAttempt(level, position) {
		attemptGrid[level][position] += 1
	}
	// resetAttempts sets the attempt number at the grid space to 0
	function resetAttempts(level, position) {
		attemptGrid[level][position] = 0
	}

	// toggleAttemptMode toggles being able to set attempts in the grid
	let attemptEnabled = false
	function toggleAttemptMode() {
		attemptEnabled = !attemptEnabled
	}

	// let canvasElem
	// let blah = {hello: "world"}
	// function showQR() {
	// 	QRCode.toCanvas(canvasElem, JSON.stringify(blah), function (error) {
	// 		if (error) console.error(error)
	// 			console.log('success!');
	// 	})
	// }

	// Toggles between scouting pieces for the scouted team and other alliance members
	let scoutTeam = true
	function toggleTeam() {
		scoutTeam = !scoutTeam
	}

	function handleCone(event, level, position) {
		if (attemptEnabled) {
			incrementAttempt(level, position)
			return
		}

		const classList = event.currentTarget.firstChild.classList
		const className = event.currentTarget.firstChild.className
		if (scoutTeam) {
			if (className.includes('cylinder')) {
				classList.replace('cylinder', 'triangle')
				gridData[level][position] = CONE
			} else if (className.includes('triangle') || className.includes('triangle-other')) {
				classList.replace('triangle', 'cylinder')
				classList.replace('triangle-other', 'cylinder')
				gridData[level][position] = NONE
			}
		} else {
			if (className.includes('cylinder')) {
				classList.replace('cylinder', 'triangle-other')
				gridData[level][position] = CONE_OTHER
			} else if (className.includes('triangle') || className.includes('triangle-other')) {
				classList.replace('triangle', 'cylinder')
				classList.replace('triangle-other', 'cylinder')
				gridData[level][position] = NONE
			}
		}
	}

	function handleCube(event, level, position) {
		if (attemptEnabled) {
			incrementAttempt(level, position)
			return
		}

		const classList = event.currentTarget.firstChild.classList
		const className = event.currentTarget.firstChild.className
		if (scoutTeam) {
			if (className.includes('none')) {
				classList.replace('none', 'square')
				gridData[level][position] = CUBE
			} else if (className.includes('square') || className.includes('square-other')) {
				classList.replace('square', 'none')
				classList.replace('square-other', 'none')
				gridData[level][position] = NONE
			}
		} else {
			if (className.includes('none')) {
				classList.replace('none', 'square-other')
				gridData[level][position] = CUBE_OTHER
			} else if (className.includes('square') || className.includes('square-other')) {
				classList.replace('square', 'none')
				classList.replace('square-other', 'none')
				gridData[level][position] = NONE
			}
		}
	}

	function handleHybrid(event, level, position) {
		if (attemptEnabled) {
			incrementAttempt(level, position)
			return
		}

		const classList = event.currentTarget.firstChild.classList
		const className = event.currentTarget.firstChild.className
		if (scoutTeam) {
			if (className.includes('none')) {
				classList.replace('none', 'square')
				gridData[level][position] = CUBE
			} else if (className.includes('square') || className.includes('square-other')) {
				classList.replace('square', 'triangle')
				classList.replace('square-other', 'triangle')
				gridData[level][position] = CONE
			} else if (className.includes('triangle') || className.includes('triangle-other')) {
				classList.replace('triangle', 'none')
				classList.replace('triangle-other', 'none')
				gridData[level][position] = NONE
			}
		} else {
			if (className.includes('none')) {
				classList.replace('none', 'square-other')
				gridData[level][position] = CUBE_OTHER
			} else if (className.includes('square') || className.includes('square-other')) {
				classList.replace('square', 'triangle-other')
				classList.replace('square-other', 'triangle-other')
				gridData[level][position] = CONE_OTHER
			} else if (className.includes('triangle') || className.includes('triangle-other')) {
				classList.replace('triangle', 'none')
				classList.replace('triangle-other', 'none')
				gridData[level][position] = NONE
			}
		}
	}
</script>
<style>
	.top-bar {
		display: grid;
		grid-template-columns: 1fr calc(100% / 3);

		background-color: var(--mdc-theme-primary);
	}

	.undo {
		/* grid-column: 2; */
		justify-self: end;
		align-self: center;
	}
	
	.close {
		/* grid-column: 3; */
		justify-self: end;
		align-self: center
	}

	.btn {
		color: white;
		padding: 0.3em;
		border-radius: 50%;
	}

	.title {
		font-size: 2rem;
		font-style: italic;
		text-align: center;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}

	.grid {
	display: flex;
	flex-direction: column;
	}

	.grid > div {
		height: 35px;
		width: 35px;
		padding: 0.5rem;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.level-1 > div {
		outline: 1px solid black;
	}

	.component-body {
		margin-bottom: 5rem;
	}

	.grid-container {
		display: flex;
		justify-content: center;
		font-size: 2rem;
		color: red;
	}

	.right {
		transform: rotate(180deg);
	}

	.cube {
		outline: 1px solid black;
		position: relative;
	}

	.cone {
		position: relative;
	}

	.cylinder {
		width: 8px;
		height: 8px;
		background: black;
		border-radius: 50%;
	}

	.attempt {
		position: absolute;
		font-weight: bold;
	}

</style>
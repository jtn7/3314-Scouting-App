<div class="top-bar">
	<div class="undo">
		<i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true" on:click={toggleTeam}>account_box</i>
		<i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true" on:click={rotateGrid}>sync</i>
		<!-- <i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true" on:click={clearCircles}>delete</i> -->
	</div>
	<div on:click={close} class="close">
		<i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true">close</i>
	</div>
</div>
<div class="component-body">
	<div class="title">SUBSTATION</div>
	<div bind:this={gridElem} class="grid-container left">
		<div bind:this={lvl3} class="level-3 grid">
			<div class="cone" on:click={handleCone}><div class="cylinder"></div></div>
			<div class="cube" on:click={handleCube}><div class="none"></div></div>
			<div class="cone" on:click={handleCone}><div class="cylinder"></div></div>
			<div class="cone" on:click={handleCone}><div class="cylinder"></div></div>
			<div class="cube" on:click={handleCube}><div class="none"></div></div>
			<div class="cone" on:click={handleCone}><div class="cylinder"></div></div>
			<div class="cone" on:click={handleCone}><div class="cylinder"></div></div>
			<div class="cube" on:click={handleCube}><div class="none"></div></div>
			<div class="cone" on:click={handleCone}><div class="cylinder"></div></div>
		</div>
		<div bind:this={lvl2} class="level-2 grid">
			<div class="cone" on:click={handleCone}><div class="cylinder"></div></div>
			<div class="cube" on:click={handleCube}><div class="none"></div></div>
			<div class="cone" on:click={handleCone}><div class="cylinder"></div></div>
			<div class="cone" on:click={handleCone}><div class="cylinder"></div></div>
			<div class="cube" on:click={handleCube}><div class="none"></div></div>
			<div class="cone" on:click={handleCone}><div class="cylinder"></div></div>
			<div class="cone" on:click={handleCone}><div class="cylinder"></div></div>
			<div class="cube" on:click={handleCube}><div class="none"></div></div>
			<div class="cone" on:click={handleCone}><div class="cylinder"></div></div>
		</div>
		<div bind:this={lvl1} class="level-1 grid">
			<div class="hybrid" on:click={handleHybrid}><div class="none"></div></div>
			<div class="hybrid" on:click={handleHybrid}><div class="none"></div></div>
			<div class="hybrid" on:click={handleHybrid}><div class="none"></div></div>
			<div class="hybrid" on:click={handleHybrid}><div class="none"></div></div>
			<div class="hybrid" on:click={handleHybrid}><div class="none"></div></div>
			<div class="hybrid" on:click={handleHybrid}><div class="none"></div></div>
			<div class="hybrid" on:click={handleHybrid}><div class="none"></div></div>
			<div class="hybrid" on:click={handleHybrid}><div class="none"></div></div>
			<div class="hybrid" on:click={handleHybrid}><div class="none"></div></div>
		</div>
	</div>
	<!-- <canvas bind:this={canvasElem}></canvas>
	<Button on:click={showQR} default>
		<Label>QR</Label>
	</Button> -->
	{#if false}
		<div class="triangle triangle-other square square-other right"></div>
	{/if}
</div>


<script>
	import Ripple from '@smui/ripple';
	import Button, { Label } from '@smui/button'
	// import QRCode from 'qrcode'
	import { onMount } from 'svelte';
	
	export let close
	export let gridData = {}

	let lvl3
	let lvl2
	let lvl1
	onMount(async() => {
		// populateGrid()
	})

	function populateGrid() {
		console.log(lvl1)
		const lvl3Slots = Array.from(lvl3.children)
		const lvl2Slots = Array.from(lvl2.children)
		const lvl1Slots = Array.from(lvl1.children)
		for (let i = 0; i < lvl1Slots.length; i++) {
			// Level 3
			const lvl3Piece = lvl3Slots[i].firstChild;
			if (gridData.lvl3[i] == 'c') {
				lvl3Piece.classList.replace('none', 'triangle')
				lvl3Piece.classList.replace('cylinder', 'triangle')
			} else {
				lvl3Piece.classList.replace('none', 'square')
			}
			// Level 2
			const lvl2Piece = lvl2Slots[i].firstChild;
			if (gridData.lvl2[i] == 'c') {
				lvl2Piece.classList.replace('none', 'triangle')
				lvl2Piece.classList.replace('cylinder', 'triangle')
			} else {
				lvl2Piece.classList.replace('none', 'square')
			}
			// Level 1
			const lvl1Piece = lvl1Slots[i].firstChild;
			if (gridData.lvl1[i] == 'c')
				lvl1Piece.classList.replace('none', 'triangle')
			else
				lvl1Piece.classList.replace('none', 'square')
		}
	}

	let gridElem
	let gridLeft = true
	function rotateGrid() {
		gridLeft = !gridLeft
		if (gridLeft)
			gridElem.classList.replace('right', 'left')
		else
			gridElem.classList.replace('left', 'right')
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

	function handleCone(event) {
		const classList = event.currentTarget.firstChild.classList
		const className = event.currentTarget.firstChild.className
		if (scoutTeam) {
			if (className.includes('cylinder')) {
				classList.replace('cylinder', 'triangle')
			} else if (className.includes('triangle') || className.includes('triangle-other')) {
				classList.replace('triangle', 'cylinder')
				classList.replace('triangle-other', 'cylinder')
			}
		} else {
			if (className.includes('cylinder')) {
				classList.replace('cylinder', 'triangle-other')
			} else if (className.includes('triangle') || className.includes('triangle-other')) {
				classList.replace('triangle', 'cylinder')
				classList.replace('triangle-other', 'cylinder')
			}
		}
	}

	function handleCube(event) {
		const classList = event.currentTarget.firstChild.classList
		const className = event.currentTarget.firstChild.className
		if (scoutTeam) {
			if (className.includes('none')) {
				classList.replace('none', 'square')
			} else if (className.includes('square') || className.includes('square-other')) {
				classList.replace('square', 'none')
				classList.replace('square-other', 'none')
			}
		} else {
			if (className.includes('none')) {
				classList.replace('none', 'square-other')
			} else if (className.includes('square') || className.includes('square-other')) {
				classList.replace('square', 'none')
				classList.replace('square-other', 'none')
			}
		}
	}

	function handleHybrid(event) {
		const classList = event.currentTarget.firstChild.classList
		const className = event.currentTarget.firstChild.className
		if (scoutTeam) {
			if (className.includes('none')) {
				classList.replace('none', 'square')
			} else if (className.includes('square') || className.includes('square-other')) {
				classList.replace('square', 'triangle')
				classList.replace('square-other', 'triangle')
			} else if (className.includes('triangle') || className.includes('triangle-other')) {
				classList.replace('triangle', 'none')
				classList.replace('triangle-other', 'none')
			}
		} else {
			if (className.includes('none')) {
				classList.replace('none', 'square-other')
			} else if (className.includes('square') || className.includes('square-other')) {
				classList.replace('square', 'triangle-other')
				classList.replace('square-other', 'triangle-other')
			} else if (className.includes('triangle') || className.includes('triangle-other')) {
				classList.replace('triangle', 'none')
				classList.replace('triangle-other', 'none')
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
		height: 45px;
		width: 45px;
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
	}

	.right {
		transform: rotate(180deg);
	}

	.cube {
		outline: 1px solid black;
	}

	.cylinder {
		width: 10px;
		height: 10px;
		background: black;
		border-radius: 50%
	}

	.square {
		width: 45px;
		height: 45px;
		background: purple;
		border-radius: 10px;
	}

	.square-other {
		width: 45px;
		height: 45px;
		background: green;
		border-radius: 10px;
	}

	.triangle {
		width: 0;
		height: 0;
		border-top: 20px solid transparent;
		border-bottom: 20px solid transparent;
		border-right: 40px solid yellow;
	}

	.triangle-other {
		width: 0;
		height: 0;
		border-top: 25px solid transparent;
		border-bottom: 25px solid transparent;
		border-right: 50px solid green;
	}

</style>
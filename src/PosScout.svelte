<div class="top-bar">
	<div class="undo">
		<i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true" on:click={undoCircle}>undo</i>
		<i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true" on:click={redoCircle}>redo</i>
		<i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true" on:click={clearCircles}>delete</i>
	</div>
	<div on:click={close} class="close">
		<i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true">close</i>
	</div>
</div>
<div class="container" on:mousedown={drawCircle}>
	<img src="/img/field.jpg" alt="" srcset="">
	{#each circles as circle}
	<div class="circle" style="left: {circle.x}px; top: {circle.y}px;"></div>
	{/each}
</div>

<script>
	import Ripple from '@smui/ripple';
	export let close
	let circles = [] // array to store the circles
	let redoCircles = []

	function drawCircle(event) {
		// get the current mouse position
		const x = event.clientX - 25
		const y = event.clientY - 25

		// create a new circle and add it to the array
		circles = [...circles, { x, y }]
	}

	function undoCircle() {
		if (circles.length > 0) {
			redoCircles = [...redoCircles, circles.pop()]
			circles = circles
		}
	}

	function redoCircle() {
		if (redoCircles.length > 0) {
			circles = [...circles, redoCircles.pop()]
		}
	}

	function clearCircles() {
		circles = []
	}
</script>
<style>
	.circle {
		/* style for the circle */
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: red;
		position: absolute;
	}
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

	.container {
		width: 100vw;
		height: 80vh;
		display: flex;
		justify-content: center;
	}

	.container>img {
		aspect-ratio: 0.7;
		width: 100%;
		max-width: min-content;
		height: auto

	}
</style>
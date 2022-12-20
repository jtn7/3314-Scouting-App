<div class="top-bar">
	<div class="undo">
		<i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true">undo</i>
		<i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true">redo</i>
	</div>
	<div on:click={close} class="close">
		<i use:Ripple={{ surface: true }} class="material-icons btn" aria-hidden="true">close</i>
	</div>
</div>
<div class="container">
	<img src="/img/field.jpg" alt="" srcset="">
</div>

<script>
	import Ripple from '@smui/ripple';
	export let close
</script>
<style>
	.top-bar {
		display: grid;
		grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);

		background-color: var(--mdc-theme-primary);
	}

	.undo {
		grid-column: 2;
		justify-self: center;
		align-self: center;
	}
	
	.close {
		grid-column: 3;
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
		height: 90vh;
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
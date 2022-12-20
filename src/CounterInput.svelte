<div class="container">
	<div use:Ripple={{ surface: true }} on:click={decrement} class="material-icons btn">remove</div>
	<div class="count">{count}</div>
	<div use:Ripple={{ surface: true }} on:click={increment} class="material-icons btn">add</div>
</div>

<script>
	import Ripple from '@smui/ripple';
	let count = 0

	function increment() {
		count += 1
	}
	function decrement() {
		if (count !== 0) {
			count -= 1
		}
	}
</script>

<style>

	.container {
		display: flex;
		gap: 0.5em;
	}

	.btn {
		color: white;
		background-color: var(--mdc-theme-primary);
		border-radius: 30%;
		width: 23px;
		height: 23px;
		padding: 0.1em;
	}

	.count {
		font-size: large;
		font-weight: bold;
		width: 21px;
		text-align: center;
		align-self: center;
	}

</style>
<div class="container">
	<div class="icon-bg" on:click={decrement}>
		<div class="material-icons btn">remove</div>
	</div>
	<div class="count">{count}</div>
	<div class="icon-bg" on:click={increment}>
		<div class="material-icons btn">add</div>
	</div>
</div>

<script>
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
		gap: 1rem;
	}

	.icon-bg {
		background-color: var(--mdc-theme-primary);
		border-radius: 3px;
		width: 24px;
		height: 24px;
	}

	.btn {
		color: white;
		width: 24px;
		height: 24px;
	}

	.count {
		padding-top: 3px;
		font-size: large;
		width: 21px;
		text-align: center;
	}

</style>
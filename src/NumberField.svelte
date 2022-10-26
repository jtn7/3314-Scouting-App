<div class="field-container">
	<div class="field-name">{fieldName}</div>
	<div class="right-align">
		<div use:Ripple={{ surface: true, color: 'primary' }}
			on:click={decrement} class="material-icons button">
			remove
		</div>
		<div class="number">{num}</div>
		<div use:Ripple={{ surface: true, color: 'primary' }} 
			on:click={increment} class="material-icons button">
			add
		</div>
	</div>
</div>

<script>
	import IconButton from '@smui/icon-button'
	import Ripple from '@smui/ripple'
	let num = 0;
	export let fieldName = 'Default';

	function increment() {
		num += 1
	}

	function decrement() {
		if (num != 0) {
			num -= 1
		}
	}
</script>
<style>
	.field-container {
		display: flex;
		padding: 0.5em;
		align-items: center;
		justify-content: space-between;
		font-size: 0.9rem;
	}

	.field-name {
		padding-left: 1rem;
		width: 30vw;
	}

	.right-align {
		align-self: end;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 50%;
	}

	.button {
		/* background-color: var(--mdc-theme-primary); */
		border-radius: 50%;
		width: 24px;
		height: 24px;
	}
</style>
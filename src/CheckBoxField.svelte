<div class="field-container">
	<div class="field-name">{fieldName}</div>
	<Switch bind:checked touch icons={false}/>
</div>

<script>
	import Switch from '@smui/switch'
	export let fieldName = 'Default'
	let checked = false;
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
		padding: 0 1rem;
	}

</style>
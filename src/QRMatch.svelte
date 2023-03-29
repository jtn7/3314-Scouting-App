<div class="top-bar">
	<div on:click={close} class="close">
		<i use:Ripple="{{ surface: true }}" class="material-icons btn" aria-hidden="true">close</i>
	</div>
</div>
<div class="component-body">
	<div class="qr-block">
		<canvas bind:this={canvasElem} width="100%"></canvas>
		<div>Match 1</div>
	</div>
</div>
<script>
	import Ripple from '@smui/ripple';
	import QRCode from 'qrcode'
	import { onMount } from 'svelte'
	export let close
	export let payload

	let canvasElem
	onMount(async() => {
		let qrWidth = window.innerWidth * 0.5;
		QRCode.toCanvas(canvasElem, JSON.stringify(payload), {width: qrWidth}, function (error) {
			if (error)
				console.error(error)
		})
	})
</script>
<style>
.top-bar {
	display: grid;
	background-color: var(--mdc-theme-primary);
}
.close {
	justify-self: end;
	align-self: center
}

.component-body {
	display: flex;

	justify-content: center;
	margin-top: 2rem;
}

.qr-block {
	text-align: center;
}
</style>
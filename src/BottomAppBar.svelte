<div class="bap">
	<div class="tab" on:click="{teamsView}">
		<i class="material-icons" aria-hidden="true">people</i>
		<div>Teams</div>
	</div>
	<div class="tab" on:click={scoutingView}>
		<i class="material-icons" aria-hidden="true">content_paste</i>
		<div>Scout</div>
	</div>
	<div class="active-tab {activeTab}"></div>
</div>

<script>
	import { teamsTab } from './stores.js';
	let activeTab = 'active-left'

	function teamsView() {
		activeTab = 'active-left';
		teamsTab.set(true);
		// scroll to top
	}
	function scoutingView() {
		activeTab = 'active-right';
		teamsTab.set(false);
		// scroll to top
	}
</script>

<style>
	.bap {
		background-color: var(--mdc-theme-primary);
		position: sticky;
		bottom: 0;
		width: 100%;
		display: flex;
		align-content: center;
		justify-content: space-around;
	}

	.bap>.tab {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		color: white;
		width: 100%;
		height: 100%;
		padding: 0.7rem 0;
		cursor: pointer;
		border: none;
	}

	.active-tab {
		border-bottom: 1px solid white;
		width: 50%;
		z-index: 1;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.bap>.active-left {
		transition: transform 300ms;
	}

	.bap>.active-right {
		transition: transform 300ms;
		transform: translateX(100%);
	}
</style>
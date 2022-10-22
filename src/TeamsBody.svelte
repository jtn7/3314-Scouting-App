<div class="team-section">
	<div class="title">Favorites</div>
	<div class="teams">
		{#each teams as team}
		<div class="team">
			<div class="team-logo"><img src="{team.logo}" aria-label="{team.number} logo"></div>
			<div class="team-text">
				<div class="team-name">{team.name}</div>
				<div class="team-number">{team.number}</div>
			</div>
		</div>
		{/each}
	</div>
</div>
<div class="team-section">
	<div class="title">Event</div>
	<div class="teams">
		{#each teams as team}
		<div class="team">
			<div class="team-logo"><img src="" alt="" srcset=""></div>
			<div class="team-text">
				<div class="team-name">{team.name}</div>
				<div class="team-number">{team.number}</div>
			</div>
		</div>
		{/each}
	</div>
</div>
<div class="team-section">
	<div class="title">All</div>
	<div class="teams">
		{#each teams as team}
		<div class="team">
			<div class="team-logo"><img src="" alt="" srcset=""></div>
			<div class="team-text">
				<div class="team-name">{team.name}</div>
				<div class="team-number">{team.number}</div>
			</div>
		</div>
		{/each}
	</div>
</div>

<script>
	let teams = [
		{ logo: '', number: '3314', name: 'Mechanical Mustangs' },
		{ logo: '', number: '3314', name: 'Mechanical Mustangs' },
		{ logo: '', number: '3314', name: 'Mechanical Mustangs' },
		{ logo: '', number: '3314', name: 'Mechanical Mustangs' },
		{ logo: '', number: '3314', name: 'Mechanical Mustangs' },
		{ logo: '', number: '3314', name: 'Mechanical Mustangs' }
	];
</script>
<style>
	.team-section {
		margin-bottom: 0.5em;
	}

	.team-section>.title {
		font-size: 1rem;
		color: rgb(32, 32, 32);
		margin-bottom: 0.1rem;
		margin-left: 0.6rem;
	}

	.team {
		padding: 0.6rem 0.6rem;
		/* border-radius: 5px; */

		display: flex;
		gap: 1rem;
		align-items: center;
		font-size: 0.85rem;

		border-bottom: 1px solid rgb(222, 222, 222);
	}

	.team:hover {
		background-color: rgba(0, 0, 0, 0.03);
	}

	.team:first-child {
		/* border-radius: 10px 10px 0 0; */
		/* border-radius: 5px 5px 0 0; */
		/* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
	}

	.team:last-child {
		border: none;
		/* border-radius: 0 0 5px 5px; */
	}

	.team>.team-logo {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background-color: rgb(236, 236, 236)
	}

	.team .team-number {
		color: rgba(0, 0, 0, 0.5);
		font-size: 0.7rem;
	}
</style>
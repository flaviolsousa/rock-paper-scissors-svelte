<script>
	// @ts-nocheck
	import { options } from './options';
	import { selected1 } from './store';

	let players = [
		{ id: 1, selected: null },
		{ id: 2, selected: null },
	];

	selected1.subscribe((value) => {
		players[0].selected = value;
		players[1].selected = options[Math.floor(Math.random() * options.length)];
		players = players;
	});
</script>

<div class="versus">
	{#each players as o, i}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="player p{o.id}"
			class:waiting={players[i].selected == null}
			class:selected={players[i].selected != null}
		>
			<img src={players[i].selected['srcP' + o.id]} alt={players[i].selected.alt} />
		</div>
	{/each}
</div>

<style>
	.versus {
		widows: 100%;
		height: 14em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.versus .player {
		transition: all 1s ease-in-out;
	}

	.versus .player.waiting {
		opacity: 0;
	}

	.versus .player.selected {
		opacity: 100;
	}

	.versus .player img {
		width: 12em;
		height: 12em;
	}
	.versus .player.p2 {
		margin-left: 1em;
	}
</style>

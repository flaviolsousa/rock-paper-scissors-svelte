<script>
	// @ts-nocheck
	import { options } from './options';
	import { selected1 } from './store';
	import Score from './Score.svelte';
	import Versus from './Versus.svelte';
	import CommandOptions from './CommandOptions.svelte';

	selected1.set(options[Math.floor(Math.random() * options.length)]);

	let points1 = 0;
	let points2 = 2;
</script>

<div class="container">
	<div class="game">
		<Score bind:points1 bind:points2 />
		<CommandOptions />
		<Versus />
	</div>
</div>

<style>
	.container {
		width: 100%;
		/*border: 1px solid red;*/
		display: flex;
		justify-content: center;
	}

	.game {
		max-width: 455px;
		align-self: center;
		justify-self: center;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		/* border: 1px solid black; */
	}
</style>

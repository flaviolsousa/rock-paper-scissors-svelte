<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { state, counter, selected1, selected2, points1, points2 } from './store';
	import { options, STATE_SELECTING, STATE_SCORING, CYCLES_TO_SELECT, CYCLES_TOTAL } from './enums';

	import Score from './Score.svelte';
	import Versus from './Versus.svelte';
	import CountVersus from './CountVersus.svelte';

	import CommandOptions from './CommandOptions.svelte';

	function updateScore() {
		if ($selected1.win == $selected2.id) {
			points1.update((v) => v + 1);
		} else if ($selected1.loss == $selected2.id) {
			points2.update((v) => v + 1);
		}
	}

	function runStep() {
		counter.update((v) => v - 1);
		if ($state === STATE_SELECTING) {
			if ($counter == 0) {
				if ($selected1 == null) {
					selected1.set(options[Math.floor(Math.random() * options.length)]);
				}
				state.set(STATE_SCORING);
				counter.set(CYCLES_TOTAL);
				updateScore();
			}
		} else {
			if ($counter == CYCLES_TO_SELECT) {
				selected1.set(null);
				state.set(STATE_SELECTING);
			}
		}
		setTimeout(() => {
			runStep();
		}, 1000);
	}

	onMount(() => {
		setTimeout(() => {
			runStep();
		}, 1000);
	});
</script>

<div class="container">
	<div class="game">
		<Score />
		<CommandOptions />
		{#if $state == STATE_SELECTING}
			<CountVersus />
		{/if}
		{#if $state == STATE_SCORING}
			<Versus />
		{/if}
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

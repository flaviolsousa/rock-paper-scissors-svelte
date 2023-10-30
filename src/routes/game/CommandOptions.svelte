<script>
	// @ts-nocheck
	import { options, STATE_SELECTING, STATE_SCORING } from './enums';
	import { selected1, state } from './store';

	function handleClickOption(o) {
		if ($state == STATE_SELECTING) {
			selected1.set(o);
		}
	}
</script>

<div class="commands">
	{#each options as o (o.id)}
		<div class="command">
			<button
				class="background"
				class:selected={o.id == $selected1?.id}
				class:scoring={$state == STATE_SCORING}
				on:click={() => handleClickOption(o)}
			>
				<img src={o.src} alt={o.alt} />
			</button>
		</div>
	{/each}
</div>

<style>
	.commands {
		justify-content: center;
		align-items: center;
		display: flex;
	}

	.command {
		display: flex;
		height: auto;
		flex-basis: 100%;
		align-items: center;
		justify-content: center;
	}

	.command > .background {
		display: flex;

		justify-content: center;
		align-items: center;

		line-height: 8rem;
		cursor: pointer;
		width: 8rem;
		height: 8rem;
		border-radius: 50%;
		border: none;
		text-align: center;
		position: relative;
		text-decoration: none;
		z-index: 1;
		background-color: transparent;

		border: 0.2rem solid var(--color-theme-1);
		box-shadow: 0 0 0.5rem transparent;
		border-color: transparent;
		transition: all 0.5s ease-in-out;
	}

	.command > .background > img {
		width: 6rem;
		height: auto;
	}

	.background.selected {
		border: 0.2rem solid var(--color-theme-1);
		box-shadow: 0 0 0.5rem var(--color-theme-1);
	}
	.background.selected.scoring {
		background-color: var(--color-bg-1);
	}
</style>

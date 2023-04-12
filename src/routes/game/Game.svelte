<script>
	import Score from './Score.svelte';
	import paper from '$lib/images/paper.svg';
	import rock from '$lib/images/rock.svg';
	import scissor from '$lib/images/scissor.svg';

	const options = [
		{ src: paper, alt: 'Paper Button', id: 0, win: 1 },
		{ src: rock, alt: 'Rock Button', id: 1, win: 2 },
		{ src: scissor, alt: 'Scissor Button', id: 2, win: 0 }
	];

	/**
	 * @type {{ src: string, alt: string, id: number, win: number } | undefined}
	 */
	let current;


	let points1 = 0;
	let points2 = 2;

	/**
	 * @param {number} id
	 */
	function selectOption(id) {
		current = options.find(o => o.id == id);
	}
</script>

<div class="container">
	<div class="game">
		<Score bind:points1 bind:points2/>
		<div class="commands">
			{#each options as o (o.id)}
				<div class="command">
					<button 
						class="background" 
						class:selected={o.id == current?.id} 
						on:click={() => selectOption(o.id)}>
						<img src={o.src} alt={o.alt} />
					</button>
				</div>
			{/each}
		</div>
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
		/*border: 1px solid red;*/
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
		transition: all 0.3s ease-in-out;    
	}

	.command > .background > img {
		width: 6rem;
		height: auto;
	}

	.background.selected {
		border: 0.2rem solid var(--color-theme-1);
		box-shadow: 0 0 0.5rem var(--color-theme-1);
		border-color: var(--color-theme-1);
    	
	}
</style>

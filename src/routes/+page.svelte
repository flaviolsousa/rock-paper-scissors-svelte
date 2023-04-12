<script>
	import Game from "./game/Game.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="First Svelte App" />
</svelte:head>

<session>
	<h1>Paper-Rock-Scissor</h1>
	<Game/>
</session>

<style>
	session {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

</style>

<script>
	// @ts-nocheck
	export let points1 = 0;
	export let points2 = 2;
</script>

<div class="score-container">
	<div class="score-label">
		<span class="point">{points1}</span>
		<span class="separator">:</span>
		<span class="point">{points2}</span>
	</div>
</div>

<style>
	.score-container {
		height: 6em;
		width: 100%;
		margin: 1rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(255, 255, 255, 0.7);
	}

	.score-label {
		font-size: 3em;
		display: flex;
		font-weight: bold;
		width: 100%;
	}
	.score-label > span.point {
		flex-basis: 100%;
		text-align: center;
	}
</style>

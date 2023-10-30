<script>
	// @ts-nocheck
	import { counter } from './store';
</script>

<div class="count-versus-container">
	<div class="counter">
		<span>{$counter - 1}</span>
	</div>
</div>

<style>
	.count-versus-container {
		widows: 100%;
		height: 14em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.count-versus-container .counter {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 12em;
		height: 12em;
	}

	.count-versus-container .counter span {
		font-size: 12em;
		font-weight: bold;
	}
</style>

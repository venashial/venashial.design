<script>
	import { onMount } from 'svelte';
  import { scrolledPercent } from './_store.js'

  let outerDiv;

	onMount(() => {
		console.log(outerDiv.clientHeight);
    console.log($scrolledPercent)
	});

  $: if ($scrolledPercent) {
    console.log($scrolledPercent)
  }
</script>

<div class="outer" bind:this={outerDiv}>
	<div class="thumb" style="--scrolledPercent:{$scrolledPercent};" />
</div>

<style lang="scss">
	.outer {
		position: relative;
		max-width: 6px;
    min-width: 6px;
		margin: 0 4rem;
		background-color: hsl(0, 0%, 71%);
		border-radius: 0.3rem;

		@media screen and (max-width: 950px) {
			margin: 0 2rem 0 1rem;
		}

		.thumb {
			position: absolute;
			top: calc(var(--scrolledPercent) * calc(100% - 100px));
			left: -1px;
			width: 8px;
			height: 100px;
			border-radius: 0.3rem;
			background-color: hsl(0, 0%, 40%);
		}
	}
</style>

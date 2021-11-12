<script>
	import Scroller from './_Scroller.svelte';
	import NamePlayer from '$components/NamePlayer.svelte';
	import { scrolledPercent } from './_store.js';
	import { onMount } from 'svelte';

	export let body;

	let textElm;

	onMount(() => {
		textElm.onscroll = () => {
			scrolledPercent.set(textElm.scrollTop / (textElm.scrollHeight - textElm.clientHeight));
		};
	});
</script>

<div class="outer">
	<Scroller />
	<div class="text" bind:this={textElm}>
		<h1>venashial</h1>
		<h2><span class="subtitle">/ˈvēnäSHyəl/</span> <NamePlayer /></h2>

		<article id="body">
			{@html body}
		</article>
	</div>
</div>

<style lang="scss">
	.outer {
		display: flex;
	}

	.subtitle {
		padding: 0.3rem 0.5rem;
		background-color: #d1d1d1;
	}

	.text {
		overflow-y: auto;
		position: relative;
		max-height: calc(100vh - 6rem);
		scrollbar-width: none; /* Firefox */

		&::-webkit-scrollbar {
			display: none; /* Safari and Chrome */
		}

		mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0));

		> *:last-child {
			margin-bottom: 5rem;
		}
	}

	article {
		max-width: 700px;
	}
</style>

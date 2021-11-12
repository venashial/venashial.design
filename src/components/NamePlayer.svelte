<script>
	import Icon from 'svelte-awesome';
	import { volumeUp, stopCircle } from 'svelte-awesome/icons';
	import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

	let audio;
	let loaded = false;
	let icon = volumeUp;

	onMount(() => {
		audio = new Audio('/audio/venashial.mp3');
		loaded = true;

		audio.onended = () => {
			icon = volumeUp;
		};
	});

	function toggleAudio() {
		console.log(audio.paused);
		if (audio.paused) {
			audio.play();
			icon = stopCircle;
		} else {
			audio.pause();
			audio.currentTime = 0;
			icon = volumeUp;
		}
	}
</script>

{#if loaded}
	<div on:click={toggleAudio} class="wrapper" transition:fade>
		<Icon data={icon} scale="3" />
	</div>
{/if}

<style lang="scss">
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
</style>

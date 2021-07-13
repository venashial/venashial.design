<script context="module">
	export const prerender = true;
</script>

<script>
	import Sidebar from './_Sidebar.svelte';
	import Body from './_Body.svelte';
</script>

<svelte:head>
	<title>venashial.design</title>
</svelte:head>

<main>
	<Sidebar />
	<Body />
</main>

<style lang="scss">
	main {
		padding: 3rem 7rem;
		height: calc(100vh - 6rem);
		display: grid;
		grid-template-columns: auto 1fr;

		@media screen and (max-width: 950px) {
			padding: 2rem 1rem;
			height: calc(100vh - 4rem);
		}
	}
</style>

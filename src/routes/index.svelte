<script context="module">
  export const prerender = true;
  import render from '$lib/markdown.js';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch, session, stuff }) {
		const res = await fetch('/text/body.md');

		if (res.ok) {
      const text = await res.text();
			return {
				props: {
					body: render(text)
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Could not load body')
		};
	}
</script>

<script>
	import Sidebar from './_Sidebar.svelte';
	import Body from './_Body.svelte';

  export let body;
</script>

<svelte:head>
	<title>venashial.design</title>
</svelte:head>

<main>
	<Sidebar />
<Body {body} />
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

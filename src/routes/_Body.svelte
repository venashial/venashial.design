<script>
	import Scroller from './_Scroller.svelte';
</script>

<div class="outer">
	<Scroller />
	<div class="text">
		<h1>venashial</h1>
		<h2><span class="subtitle">/ˈvēnäSHyəl/</span></h2>
		<div class="error">
			<h3>Under Construction</h3>
			<p>
				This new page made with <a href="https://svelte.dev" target="_blank">Svelte</a> is under construction.
				Check back for updates. (The markdown below isn't rendered correctly yet.)
			</p>
		</div>
		<h3>Introduction</h3>
		<p>
			Hi there, I'm venashial. (That's a pen name.) I love [programming], designing UIs, making
			[games], and creating logos. I also love to read [sci-fi] & [fantasy books], watch [animated
			shows], and listen to [broadway musicals].
		</p>
		<h3>Links</h3>
		<ul>
			<li>Play <a href="https://venashial.games" target="_blank">Games</a> I've made</li>
			<li>My code on <a href="https://github.com/venashial/" target="_blank">GitHub</a></li>
			<li>
				Songs I like on
				<a
					href="https://open.spotify.com/user/cslxf6mijlcrjoneoonugsx2s?si=85bc61f0a32541af"
					target="_blank">Spotify</a
				>
			</li>
			<li>Contact via <a href="mailto:venashial.subfile@aleeas.com" target="_blank">Email</a></li>
		</ul>
		<h3>Programming</h3>
		<p>
			Programming is a core part of who I am and who I will be. It's hard to put into words the joy
			of seeing a function work after hours of trial and error. For better or for worse, the problem
			solving nature of coding is weaved into my mind, whether I'm sitting at my desk or going on a
			hike.
			<br /><br />
			So what do I program? I create websites and desktop apps with [Javascript], with backend relational
			database servers. I contribute to open source projects, like [modrinth/knossos] for fun and to
			better the app for everyone. In addition, I have a plethora of [my own projects], most solve problems
			<br /><br />
			I've encountered or test a new technology I've learned. How do you write code? My setup normally
			consists of [VSCode], [iTerm2], and [Firefox], plus some other browsers for ample testing. For
			websites, I use a front-end javascript framework such as [Vue] ([Nuxt]) or [Svelte] ([Kit]). For
			servers, I use [NodeJS] and containerize it with docker plus docker-compose. To deploy websites,
			I've used [Vercel], [Heroku], [Netlify], and [GitHub Pages], but I also self host projects on occasion.
		</p>
		<a href="https://vena.sh">Exit to Portal ❯</a>
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
	}

	.error {
		background-color: #f8b6b9;
		padding: 1.4rem 1.5rem;
		border-radius: 0.5rem;
		margin: 2rem 0;
		text-align: center;
		display: flex;
		flex-direction: column;

		a {
			border-color: maroon;
		}

		p {
			margin: 0;
		}
	}
</style>

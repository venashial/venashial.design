<div class="outer">
	<div class="shape" />

	<div class="shape" />

	<div class="shape" />
</div>

<style lang="scss">
	.outer {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

		@media screen and (max-width: 950px) {
			display: none;
		}
	}
	.shape {
		width: 180px;
		height: 180px;
		margin-bottom: 2rem;
    position: relative;

		&:nth-child(1) {
			background-color: #ffd500;
			background: linear-gradient(135deg, rgba(255, 213, 0, 1) 0%, rgba(255, 177, 0, 1) 100%);
			border-radius: 100%;
			animation: rotate 8s ease-in-out infinite 4s;
		}

		&:nth-child(2) {
			background-color: #ee5c5c;
			background: linear-gradient(
				135deg,
				hsl(320, 93%, 77%) hsl(320, 81%, 65%) 42%,
				hsl(320, 65%, 55%) 100%
			);
			clip-path: polygon(50% 5%, 0% 95%, 100% 95%);
			animation: rotate 8s ease-in-out infinite 2s;
		}

		&:nth-child(3) {
			background-color: #6ec3ff;
			background: linear-gradient(135deg, rgba(110, 195, 255, 1) 0%, rgba(110, 121, 255, 1) 100%);
			animation: rotate 8s ease-in-out infinite 6s;
		}

		&:last-child {
			margin-bottom: 0;
		}
	}

	@keyframes rotate {
		0% {
			transform: rotateY(0deg);
		}
		40% {
			transform: rotateY(180deg);
		}
		60% {
			transform: rotateY(180deg);
		}
		100% {
			transform: rotateY(360deg);
		}
	}
</style>

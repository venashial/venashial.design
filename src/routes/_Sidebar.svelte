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

		&:nth-child(1) {
			background-color: #ffd500;
			border-radius: 100%;
		}

		&:nth-child(2) {
			background-color: #ee5c5c;
			clip-path: polygon(50% 5%, 0% 95%, 100% 95%);
		}

		&:nth-child(3) {
			background-color: #6ec3ff;
		}

		&:last-child {
			margin-bottom: 0;
		}
	}
</style>

<script>
	import {board, score, options} from '../store/main.js'

	// let showModal = false
	// let boardSize = 0
	
	// board.subscribe(value => boardSize = value)
	// options.subscribe(value => showModal = value)
	const handleNewGameButton = () => {
		board.set(0)
		score.set(0)
		options.set(true)
	}
</script>

<header>
	<div class="title">
		<a href="https://kit.svelte.dev">
			memory
		</a>
	</div>

	<nav>
		<button on:click={handleNewGameButton}>New Game</button>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30px;
		box-sizing: border-box;
		width: 996px;
		max-width: 100%;
		margin: auto;

		.title {
			a {
				color: #182d3e;
				font-weight: 700;
				font-size: 32px;
			}
		}

		button{
			background-color: #ffa212;
			color: white;
			border: none;
			border-radius: 100px;
			font-weight: 400;
			padding: 7px 21px;
			font-size: 20px;
			cursor:pointer;
		}
	}
</style>

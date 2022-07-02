<script>
	import Button from '$lib/Button.svelte'

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
		<Button label="new game" func={handleNewGameButton}/>
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

		a {
			color: #31485a;
		}
	}
</style>

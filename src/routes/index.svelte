<script>
	import Header from '$lib/Header.svelte';
	import Board from '$lib/Board.svelte'
	import StartGame from '$lib/StartGame.svelte'
	import Modal from '$lib/Modal.svelte'

	import {board, score, options, wall} from '../store/main.js'

	let boardSize = 0
	let block = false
	let scoreMoves
	let showModal

	board.subscribe(value => boardSize = value)
	wall.subscribe(value => block = value )
	score.subscribe(value => scoreMoves = value)
	options.subscribe(value => showModal = value)
 		
</script>

<svelte:head>
	<title>Memory</title>
	<meta name="description" content="A memory svelte game" />
</svelte:head>

<div id="game">
	<Header />
	
	<div class="board">
		{#if boardSize}
			<Board size={boardSize} class="board"/>
		{:else}
			<p>Start a new game!</p>
		{/if}
	</div>
	
	<div class="score">
		<div class="moves">
			<span>Moves</span>
			{scoreMoves}
		</div>
	</div>
</div>



{#if showModal}
<Modal on:open on:close={() => options.set(false)}>
	<StartGame/>
</Modal>
{/if}

{#if block}
	<div class="invisibleWall"></div>
{/if}

<style lang="scss">
	.invisibleWall {
		position: absolute;
		z-index: 1;
		background: transparent;
		height: 100vh;
		width: 100%;
		left: 0;
		top: 0;
	}

	#game {
		height: 100vh;
		display: flex;
		flex-direction: column;
		// align-items: center;
		justify-content: center;
		align-items: stretch;

	}

	.board {
		flex-grow: 1;
		align-items: stretch;

	}

	.score {
		width: 996px;
		max-width: 100%;
		margin: auto;
		padding: 30px;
		display: flex;
		gap: 20px;

		.moves {
			flex: 1;
			background: #dfe6ec;
      color: white;
      border-radius: 12px;
      text-align: center;
      display: block;
      font-weight: 700;
      padding: 7px 14px;
      font-size: 32px;
			span{ font-size: 20px; display: block; }
		}
	}
</style>
<script>  
  import { board, options } from '../store/main'

  let playersSelected = 1
  let boardSelected = 4


  let playersOptions = [
    {
      name: 'One Player',
      players: 1
    },
    {
      name: 'Two Players',
      players: 2
    },
  ]

  let tableSizeOptions = [
    {
      name: '4x4',
      size: 4
    },
    {
      name: '6x6',
      size: 6
    },
  ]

  const handleNewGame = (e) => {
    e.preventDefault()
    options.set(false)

    board.set(boardSelected)
    players.set(playersSelected)
  }

</script>

<div>
  <form on:submit={handleNewGame}>
    <!-- <h3>Select the amount of players:</h3>
    {#each playersOptions as option}
      <label>
        <input type=radio bind:group={playersSelected} value={option.players}>
        {option.name}
      </label>
    {/each} -->

    <h3>Select the size of the board:</h3>
    {#each tableSizeOptions as option}
      <label>
        <input 
          type="radio"
          bind:group={boardSelected} 
          value={option.size} 
        />
        {option.name}
      </label>
    {/each}

    <input type="submit" value="Start Game" />
  
  </form>
</div>
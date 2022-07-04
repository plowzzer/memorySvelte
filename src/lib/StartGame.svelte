<script>  
  import { board, options } from '../store/main'
  let boardSelected = 4

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
  }

</script>

<div class="content">
  <form on:submit={handleNewGame}>
    <h3>Select the size of the board:</h3>

    <div class="formSection">
      {#each tableSizeOptions as option}
        <div class="radioSelect">
          <input 
            type="radio"
            bind:group={boardSelected} 
            value={option.size} 
            id={`input-${option.size}`}
          />
          <label for={`input-${option.size}`}>
            {option.name}
          </label>
        </div>
      {/each}
    </div>

    <input type="submit" value="Start Game" />
  
  </form>
</div>

<style lang="scss">
  .content{
    padding: 20px 0;
  }
  h3 {
    color: #42515d;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 6px;
  }
  .formSection {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .radioSelect {
    flex: 1;
    label {
      background: #dfe6ec;
      color: #374752;
      border-radius: 100px;
      text-align: center;
      display: block;
      font-weight: 700;
      padding: 7px 14px;
      font-size: 20px;
      cursor:pointer;
    }
    input {
      display: none;
      &:checked + label { 
        background: #374752; 
        color: #dfe6ec;
      }
    }
  }
  input[type="submit"]{
    background-color: #ffa212;
    color: white;
    border: none;
    border-radius: 100px;
    font-weight: 700;
    padding: 7px 14px;
    font-size: 24px;
    width: 100%;
    cursor:pointer;
  }

</style>
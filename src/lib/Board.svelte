<script>
  import { shuffle, shuffleCards } from "./suffle";
  import { wall, score } from "../store/main"

  export let size

  let pairSize = size * size / 2
  let possibleIcons = ['🦊', '🐺', '🐶', '🦝', '🐷', '🐼', '🐵', '🦁', '🐱', '🐰', '🐻', '🐨', '🐯', '🐮', '🐸', '🐻‍❄️', '🦜', '🐧' ]
  let cards = Array() 

  const createBoard = () => {
    shuffle(possibleIcons)
    for (let i = 0; i < pairSize; i++) {
      cards.push({
        icon: possibleIcons[i],
        state: 'closed'
      },
      {
        icon: possibleIcons[i],
        state: 'closed'
      })
    }
    shuffleCards(cards)
  }

  const openCard = (index) => {
    if (cards[index].state === 'closed') { 
      
      cards[index].state = 'selected'
      const selectedCards = cards.filter(el => el.state === 'selected');
      
      if(selectedCards.length === 2){
        score.update(value => value + 1)
        if (selectedCards[0].icon === selectedCards[1].icon) {
          cards[selectedCards[0].index].state = 'open'
          cards[selectedCards[1].index].state = 'open'
        } else {
          wall.set(true)
          setTimeout(() => {
            cards[selectedCards[0].index].state = 'closed'
            cards[selectedCards[1].index].state = 'closed'
            wall.set(false)
          }, 1000); 
        }
      }
    } 
  }

  createBoard()
 
</script>

<div class="board">
  {#each cards as card, index }
    <div class={`grid grid-${size}`}>
      <div 
        class={`card card-${size} card-${card.state}`} 
        on:click={() => openCard(index)}
      >
        {card.state !== 'closed' ? card.icon : ''}
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .board {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .grid{
    display: flex;
    justify-content: center;
    align-items: center;
    &.grid-4{
      flex: 1 0 25%;
    }
    &.grid-6{
      flex: 1 0 15%;
    }
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 46px;
    background-color: #31485a;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    margin: 20px 0;
    &.card-open{
      background-color: #bcceda;
    }
    &.card-selected{
      background-color: #ffa210 !important;
    }
  }
</style>
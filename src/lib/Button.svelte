<script>
  export let type = "";
  export let label = "" 
  export let func = () => {};
</script>

<button 
  class={type}
  on:click={func}
>
  {label}
</button>

<style lang="scss">
  button {
    background-color: #dfe5ec;
    border: none;
    border-radius: 100px;
    padding: 7px 18px;
    color: #42515d;

    &.primary {
      background-color: #ffa212;
      color: white;
    }
  }
</style>
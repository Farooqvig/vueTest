<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/allcards" v-bind:cards="cards">All Cards</router-link> |
      <router-link to="/onecard">One Card</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
  return{
 
  };
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
    padding: 25px;
    font-size: 25px;
    font-family: inherit;
    font-weight: 600;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #1d04ff;
    }
  }
}
</style>

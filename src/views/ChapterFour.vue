<template>
  <div id="chapter-four">
    <!-- <img src="../assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'SpaceShip' }">01. SpaceShip</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Index' }">Return</router-link>
      </li>
    </ul>
    <router-view class="chapter-four"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'ChapterFour',
    data () {
      return {
        msg: 'Chapter Four Example Links'
      }
    }
  }
</script>

<style>
#chapter-four {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>

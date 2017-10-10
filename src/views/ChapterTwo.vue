<template>
  <div id="chapter-two">
    <!-- <img src="../assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'DrawInCanvas' }">DrawInCanvas</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Rectangle' }">Rectangle</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Index' }">Return</router-link>
      </li>
    </ul>
    <router-view class="chapter-two"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'ChapterTwo',
    data () {
      return {
        msg: 'Chapter Two Example Links'
      }
    }
  }
</script>

<style>
#chapter-two {
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

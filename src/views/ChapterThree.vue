<template>
  <div id="chapter-three">
    <!-- <img src="../assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'TextArranger' }">01. TextArranger</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Index' }">Return</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'ChapterThree',
    data () {
      return {
        msg: 'Chapter Three Example Links'
      }
    }
  }
</script>

<style>
#chapter-three {
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

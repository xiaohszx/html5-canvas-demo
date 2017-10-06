<template>
  <div id="app">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Chapter Links</h2>
    <ul>
      <li>
        <router-link :to="{ name: 'ChapterOne' }">ChapterOne</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ChapterTwo' }">ChapterTwo</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ChapterThree' }">ChapterThree</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ChapterFour' }">ChapterFour</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ChapterFive' }">ChapterFive</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Html5 Canvas'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

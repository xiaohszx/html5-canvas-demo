<template>
  <div id="chapter-one">
    <!-- <img src="../assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'HelloWorld' }">01. HelloWorld</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'GuessLetter' }">02. GuessLetter</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Index' }">Return</router-link>
      </li>
    </ul>
    <router-view class="chapter-one"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'ChapterOne',
    data () {
      return {
        msg: 'Chapter One Example Links'
      }
    }
  }
</script>

<style>
#chapter-one {
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

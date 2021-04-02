<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
html, body
  width: 100%
  height: 100%
  margin: 0 auto

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    width: 100%
    height: 100%

@media (min-width: 850px)
  html
    font-size: 30px

@media (max-width: 849px)
  html
    font-size: 22px

</style>

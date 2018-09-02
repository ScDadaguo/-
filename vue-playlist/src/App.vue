<template>
  <div id="app">
    <app-header></app-header>
    <app-video></app-video>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Video from './components/Video'

export default {
  name: 'App',
  components: {
    "app-header":Header,
    "app-footer":Footer,
    "app-video":Video

  }
}
</script>

<style scoped>


</style>

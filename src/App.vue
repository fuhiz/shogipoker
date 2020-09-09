<template>
  <div id="app">
    <shogi-poker />
  </div>
</template>

<script>
import ShogiPoker from "./components/ShogiPoker"
export default {
  name: "App",
  components: {
    ShogiPoker
  }
}
</script>

<style>
#app {
  height: 100%;
  background-image: url("./assets/tatami.jpeg");
  background-repeat: repeat;
  overflow: auto;
}
</style>

<template>
  <div @click="clickReset()" class="reset-btn">リセット</div>
</template>

<script>
export default {
  methods: {
    clickReset() {
      this.$store.commit("reset")
      this.$emit("reset-data")
    }
  }
}
</script>

<style scoped>
.reset-btn {
  width: 90px;
  height: 36px;
  text-align: center;
  border: solid 2px black;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 36px;
  background-image: url("../assets/mokume.jpeg");
  background-repeat: repeat;
  cursor: pointer;
}
</style>

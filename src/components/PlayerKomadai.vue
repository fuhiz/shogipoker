<template>
  <div>
    <div class="player-point">
      {{ playerPoint }}
    </div>
    <table>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState(["komaList", "playerKomadai", "playerPoint"])
  }
}
</script>

<style scoped>
table {
  border: 2px solid black;
  border-collapse: collapse;
  background-image: url("../assets/mokume.jpeg");
  background-repeat: repeat;
}

td {
  width: 42px;
  height: 48px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  border-width: 0px;
}

.player-point {
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 22px;
  font-weight: bold;
  border: 2px black solid;
  background: #e7b87a;
  margin-bottom: 10px;
}
</style>

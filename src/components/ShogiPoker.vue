<template>
  <div>
    <h1>将棋ポーカー</h1>
    <div class="wrapper">
      <div class="com-komadai">
        <com-komadai />
      </div>
      <div class="shogi-ban">
        <table>
          <tbody>
            <tr class="com-row">
              <td>歩</td>
              <td>香</td>
              <td>桂</td>
              <td>銀</td>
              <td>金</td>
              <td>角</td>
              <td>飛</td>
            </tr>
            <tr>
              <td v-for="n in 7" :key="n"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class="com-select"></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class="result">
                {{ displayResult }}
              </td>
              <td></td>
              <td class="phase">
                {{ kyokumen }}
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class="player-select"></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td v-for="n in 7" :key="n"></td>
            </tr>
            <tr class="player-row">
              <td>歩</td>
              <td>香</td>
              <td>桂</td>
              <td>銀</td>
              <td>金</td>
              <td>角</td>
              <td>飛</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="player-komadai">
        <player-komadai />
        <reset-btn />
        <game-rule />
      </div>
    </div>
  </div>
</template>

<script>
import GameRule from "./GameRule"
import ComKomadai from "./ComKomadai"
import PlayerKomadai from "./PlayerKomadai"
import ResetBtn from "./ResetBtn"

export default {
  components: {
    GameRule,
    ComKomadai,
    PlayerKomadai,
    ResetBtn
  },
  data() {
    return {
      phase: 1,
      gameResult: null,
      phaseResult: null,
      playerSelectingKoma: null,
      comSelectingKoma: null,
      canBattle: false
    }
  },
  computed: {
    kyokumen() {
      return this.phase === 1 ? "初手" : this.phase + "手目"
    },
    displayResult() {
      return this.gameResult ? this.gameResult : this.phaseResult
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 0;
  padding: 20px 0;
}
.wrapper {
  display: flex;
  justify-content: center;
  min-width: 800px;
}
.player-komadai {
  display: flex;
  flex-direction: column-reverse;
}
table {
  margin: 0 15px;
  border: solid 2px black;
  border-collapse: collapse;
  background-image: url("../assets/mokume.jpeg");
  background-repeat: repeat;
}
td {
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  border: solid 2px black;
}
.result {
  font-size: 17px;
  font-weight: bold;
}
.phase {
  font-size: 18px;
  background: #e7b87a;
  cursor: pointer;
}
.phase:hover {
  opacity: 0.7;
}
.player-select,
.com-select {
  font-weight: bold;
  background: #e7b87a;
}
.com-select {
  transform: rotate(0.5turn);
  -webkit-transform: rotate(0.5turn);
}
</style>

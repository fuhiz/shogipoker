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
              <com-koma
                v-for="(koma, index) in this.komaList"
                :key="index"
                :koma-index="index"
                :koma="koma"
              />
            </tr>
            <tr>
              <td v-for="n in 7" :key="n"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class="com-select">
                {{ comSelectingKomaLabel }}
              </td>
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
              <td @click="bet()" class="phase">
                {{ kyokumen }}
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class="player-select">
                {{ playerSelectingKomaLabel }}
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td v-for="n in 7" :key="n"></td>
            </tr>
            <tr class="player-row">
              <player-koma
                v-for="(koma, index) in this.komaList"
                :key="index"
                :koma-index="index"
                :koma="koma"
                @select-koma="select"
              />
            </tr>
          </tbody>
        </table>
      </div>
      <div class="player-komadai">
        <player-komadai />
        <reset-btn @reset-data="reset" />
        <game-rule />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import GameRule from "./GameRule"
import ComKomadai from "./ComKomadai"
import PlayerKomadai from "./PlayerKomadai"
import ResetBtn from "./ResetBtn"
import ComKoma from "./ComKoma"
import PlayerKoma from "./PlayerKoma"

export default {
  components: {
    GameRule,
    ComKomadai,
    PlayerKomadai,
    ResetBtn,
    ComKoma,
    PlayerKoma
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
    ...mapState(["komaList", "playerSelectable", "comSelectable", "playerPoint", "comPoint"]),
    kyokumen() {
      return this.phase === 1 ? "初手" : this.phase + "手目"
    },
    displayResult() {
      return this.gameResult ? this.gameResult : this.phaseResult
    },
    playerSelectingKomaLabel() {
      return this.playerSelectingKoma ? this.komaList[this.playerSelectingKoma].label : null
    },
    comSelectingKomaLabel() {
      return this.comSelectingKoma ? this.komaList[this.comSelectingKoma].label : null
    }
  },
  methods: {
    // playerが駒を選択
    select(komaIndex) {
      if (this.playerSelectable.includes(komaIndex)) {
        this.playerSelectingKoma = komaIndex
        this.canBattle = true
        this.comSelectingKoma = null
      }
    },
    // ○手目をクリック
    bet() {
      // 対決不可なら処理をしない
      if (!this.canBattle) {
        return
      }
      this.canBattle = false

      // comの駒をランダムに決める
      let size = this.comSelectable.length
      this.comSelectingKoma = this.comSelectable[Math.floor(Math.random() * size)]

      // 使用可能な駒の更新
      this.$store.commit("updatePlayerSelectable", this.playerSelectingKoma)
      this.$store.commit("updateComSelectable", this.comSelectingKoma)

      this.battle()

      if (this.phase < 7) {
        this.phase++
      } else {
        this.setGameResult()
      }
    },
    // 対決
    battle() {
      // PlayerとComの駒ポイントを比較
      const playerKomaPoint = this.komaList[this.playerSelectingKoma].point
      const comKomaPoint = this.komaList[this.comSelectingKoma].point
      if (playerKomaPoint > comKomaPoint) {
        this.phaseResult = "WIN"
        this.$store.commit("addPlayerPoint", comKomaPoint)
        this.$store.commit("addPlayerKoma", this.comSelectingKoma)
      } else if (playerKomaPoint < comKomaPoint) {
        this.phaseResult = "LOSE"
        this.$store.commit("addComPoint", playerKomaPoint)
        this.$store.commit("addComKoma", this.playerSelectingKoma)
      } else {
        this.phaseResult = "DRAW"
      }
    },
    // リセット
    reset() {
      this.phase = 1
      this.gameResult = null
      this.phaseResult = null
      this.playerSelectingKoma = null
      this.comSelectingKoma = null
      this.canBattle = false
    },
    // ゲーム結果の表示
    setGameResult() {
      if (this.playerPoint > this.comPoint) {
        this.gameResult = "勝ち"
      } else if (this.playerPoint < this.comPoint) {
        this.gameResult = "負け"
      } else {
        this.gameResult = "引き分け"
      }
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

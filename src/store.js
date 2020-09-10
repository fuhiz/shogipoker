import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const komaIndexList = ["fu", "kyosha", "keima", "gin", "kin", "kaku", "hisha"]

const store = new Vuex.Store({
  state: {
    komaList: {
      fu: { point: 1, label: "歩" },
      kyosha: { point: 3, label: "香" },
      keima: { point: 4, label: "桂" },
      gin: { point: 6, label: "銀" },
      kin: { point: 7, label: "金" },
      kaku: { point: 9, label: "角" },
      hisha: { point: 10, label: "飛" }
    },
    playerPoint: 0,
    comPoint: 0,
    playerKomadai: [],
    comKomadai: [],
    playerSelectable: Object.assign([], komaIndexList),
    comSelectable: Object.assign([], komaIndexList)
  },
  mutations: {
    // Playerの選択可能な駒を更新
    updatePlayerSelectable(state, komaIndex) {
      const index = state.playerSelectable.indexOf(komaIndex)
      state.playerSelectable.splice(index, 1)
    },
    // Comの選択可能な駒を更新
    updateComSelectable(state, komaIndex) {
      const index = state.comSelectable.indexOf(komaIndex)
      state.comSelectable.splice(index, 1)
    },
    // Playerのポイントを加算
    addPlayerPoint(state, point) {
      state.playerPoint += point
    },
    // Comのポイントを加算
    addComPoint(state, point) {
      state.comPoint += point
    },
    // Playerの駒台に駒を追加
    addPlayerKoma(state, komaIndex) {
      state.playerKomadai.push(komaIndex)
    },
    // Comの駒台に駒を追加
    addComKoma(state, komaIndex) {
      state.comKomadai.push(komaIndex)
    },
    // リセット
    reset(state) {
      state.playerPoint = 0
      state.comPoint = 0
      state.playerKomadai = []
      state.comKomadai = []
      state.playerSelectable = Object.assign([], komaIndexList)
      state.comSelectable = Object.assign([], komaIndexList)
    }
  }
})
export default store

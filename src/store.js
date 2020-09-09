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
  mutations: {}
})
export default store

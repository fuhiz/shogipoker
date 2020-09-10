<template>
  <td :class="getKomaClass()">{{ koma.label }}</td>
</template>

<script>
import { mapState } from "vuex"
export default {
  props: {
    komaIndex: {
      type: String,
      required: true
    },
    koma: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(["comSelectable"])
  },
  methods: {
    getKomaClass() {
      if (!this.comSelectable.includes(this.komaIndex)) {
        return "unselectable"
      }
    }
  }
}
</script>

<style scoped>
td {
  transform: rotate(0.5turn);
  -webkit-transform: rotate(0.5turn);
}
.unselectable {
  opacity: 0.4;
}
</style>

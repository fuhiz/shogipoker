<template>
  <td @click="clickKoma()" :class="getKomaClass()">{{ koma.label }}</td>
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
    ...mapState(["playerSelectable"])
  },
  methods: {
    getKomaClass() {
      if (!this.playerSelectable.includes(this.komaIndex)) {
        return "unselectable"
      }
    },
    clickKoma() {
      this.$emit("select-koma", this.komaIndex)
    }
  }
}
</script>

<style scoped>
td:not(.unselectable) {
  cursor: pointer;
}

td:hover,
.unselectable {
  opacity: 0.4;
}
</style>

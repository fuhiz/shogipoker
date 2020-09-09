<template>
  <div class="rule">
    <h2>ルール</h2>
    <ul>
      <li>駒を選択して○手目をクリック</li>
      <li>相手の駒より強ければ勝ち</li>
      <li>相手の駒の点数が獲得ポイント</li>
      <li>駒の点数はこちら<br />歩:1 香:3 桂:4 銀:6 金:7 角:9 飛:10</li>
    </ul>
  </div>
</template>

<style scoped>
.rule {
  margin: 0 0 5px 0;
}
h2 {
  margin: 0;
  text-align: center;
}
li {
  margin: 5px 0;
  font-size: 17px;
}
</style>

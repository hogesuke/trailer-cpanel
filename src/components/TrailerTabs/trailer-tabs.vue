<template>
  <div class="trailer-tabs">
    <button class="tab active">上映中</button>
    <button class="tab">近日公開</button>
    <button class="tab">過去作品</button>
  </div>
</template>

<script src="./trailer-tabs.js">
</script>

<style scoped lang="scss">
  .trailer-tabs {
    padding: 10px 0;

    .tab {
      width: 80px;
      margin: 0;
      padding: 12px 10px;
      border: none;
      font-size: 13px;
      font-weight: 300;
      color: rgba(0, 0, 0, .25);

      &.active {
        border-bottom: solid 2px rgba(255, 0, 71, .65);
        font-weight: 600;
        color: rgba(0, 0, 0, .7);
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>

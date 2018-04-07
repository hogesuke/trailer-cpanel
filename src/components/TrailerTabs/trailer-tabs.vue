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
      width: 100px;
      margin: 0;
      padding: 13px 10px;
      border: none;
      color: rgba(0, 0, 0, 0.3);

      &.active {
        border-bottom: solid 2px rgba(77, 114, 209, .7);
        font-weight: 700;
        color: rgba(0, 0, 0, 0.7);
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>

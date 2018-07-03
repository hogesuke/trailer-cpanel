<template>
  <div class="trailer-tabs">
    <div class="tab active">上映中</div>
    <div class="tab">近日公開</div>
    <div class="tab">過去作品</div>
  </div>
</template>

<script src="./trailer-tabs.js">
</script>

<style scoped lang="scss">
  .trailer-tabs {
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    border-bottom: solid 1px #ddd;
    box-shadow: 0 4px 4px -5px #ddd;

    .tab {
      flex-grow: 1;
      box-sizing: border-box;
      width: 80px;
      margin: 0;
      padding: 12px 10px;
      border: none;
      font-size: 13px;
      font-weight: 300;
      text-align: center;
      color: rgba(0, 0, 0, .25);

      &.active {
        $active-color: rgba(255, 0, 71, .65);

        border-bottom: solid 2px $active-color;
        font-weight: 600;
        color: $active-color;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>

<template>
  <div class="app-logo">
    <div class="center-circle" />
    <div class="sub-circle sc1" />
    <div class="sub-circle sc2" />
    <div class="sub-circle sc3" />
    <div class="sub-circle sc4" />
    <div class="sub-circle sc5" />
    <div class="sub-circle sc6" />
  </div>
</template>

<style scoped lang="scss">
  .app-logo {
    position: relative;
    width: 100px;
    height: 100px;
    background: #333;
    border-radius: 50%;
  }

  .sub-circle {
    position: absolute;
    width: 22px;
    height: 22px;
    background: #fff;
    border-radius: 50%;
  }

  .center-circle {
    position: absolute;
    top: calc(50% - 18px / 2);
    left: calc(50% - 18px / 2);
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 50%;
  }

  .sc1 {
    top: 12px;
    left: 24px;
  }

  .sc2 {
    top: 12px;
    left: 56px;
  }

  .sc3 {
    top: 39px;
    left: 8px;
  }

  .sc4 {
    top: 39px;
    left: 72px;
  }

  .sc5 {
    top: 66px;
    left: 56px;
  }

  .sc6 {
    top: 66px;
    left: 24px;
  }
</style>

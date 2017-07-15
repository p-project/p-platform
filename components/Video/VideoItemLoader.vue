<template>
  <div class="video-item animated-background">
    <div class="background-masker video-image"></div>
    <div class="background-masker video-title-first-line"></div>
    <div class="background-masker video-title-second-line"></div>
    <div class="background-masker video-metadata"></div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'video-item-loader'
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .video-item {
    display: block;
    width: 330px;
    height: 222px;
    border-radius: 3px;
    overflow: hidden;
    margin: 0 15px 23px;
    position: relative;
    border: 1px solid;
    border-color: #e5e5e5 #dfdfdf #d0d0d0;
  }

  @keyframes loading {
    0% {
      background-position: -468px 0
    }
    100% {
      background-position: 468px 0
    }
  }

  .animated-background {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: loading;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    position: relative;
  }

  .background-masker {
    background: #fff;
    position: absolute;

    &.video-image {
      height: 140px;
      left: 10px;
      right: 10px;
      top: 10px;
    }

    &.video-title-first-line {
      height: 15px;
      left: 10px;
      right: 10px;
      top: 160px;
    }

    &.video-title-second-line {
      height: 15px;
      left: 10px;
      right: 120px;
      top: 180px;
    }

    &.video-metadata {
      height: 10px;
      left: 10px;
      right: 60px;
      top: 200px;
    }
  }
</style>

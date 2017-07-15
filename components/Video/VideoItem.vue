<template>
  <router-link :to="'/watch/' + video.id" class="video-item">
    <span class="video-preview" :style="'background-image: url(\'http://lorempixel.com/400/150/#' + video.id + '\')'">
      <i class="fa fa-play-circle"></i>
    </span>
    <span class="video-title">
      <strong>{{ video.title|truncate(60, '...') }}</strong><br />
      Michel &amp; Michel &centerdot; {{ video.numberView|spaceNumber }} vues &centerdot; {{ video.uploadDate|date('%d/%m/%Y') }}
    </span>
  </router-link>
</template>

<script type="text/javascript">
  export default {
    props: ['video'],
    name: 'video-item'
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/scss/vars";

  $item-height: 150px;
  $item-width: 330px;

  .video-item {
    display: block;
    width: $item-width;
    border-radius: 3px;
    overflow: hidden;
    margin: 0 15px 23px;
    position: relative;
    border: 1px solid;
    border-color: #e5e5e5 #dfdfdf #d0d0d0;

    &:hover, &:focus {
      text-decoration: none;

      .video-preview {
        &:before {
          content: '';
          position: absolute;
          width: 100%;
          background: #000;
          height: 150px;
          opacity: .5;
        }

        .fa {
          display: block;
        }
      }

      .video-title {
        background-color: $default-main-color;
        color: white;

        strong {
          color: white;
        }
      }
    }

    .video-preview {
      background: #535353 center center / cover;
      display: block;
      height: 150px;

      .fa {
        display: none;
        position: absolute;
        top: calc(#{$item-height}/2 - 64px/2);
        left: calc(100%/2 - 55px/2);
        color: white;
        opacity: .7;
        font-size: 4em;
      }
    }

    .video-title {
      display: block;
      padding: 11px 10px;
      background: #F2F0EC;
      font-size: 0.75em;
      line-height: 1.2em;
      color: #545454;

      strong {
        font-size: 1.15em;
        color: #333333;
        display: inline-block;
        min-height: 35px;
      }
    }
  }
</style>

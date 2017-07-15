<template>
  <header>
    <span class="logo">
      <a href="#" class="round-link" @click.prevent="toggle"><i class="fa fa-navicon"></i></a>
      <router-link to="/"><span class="p">P</span>-Platform</router-link>
    </span>
    <main-search></main-search>
    <user-header></user-header>
  </header>
</template>

<script type="text/javascript">
  import MainSearch from '~components/Search/Form'
  import UserHeader from '~components/Layout/UserHeader'

  export default {
    name: 'header',
    components: {
      MainSearch,
      UserHeader
    },
    methods: {
      toggle () {
        this.$emit('toggle')
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/scss/vars";

  header {
    height: 50px;
    box-shadow: 0 2px 2px 0 rgba(40, 40, 40, 0.3);
    background: #333333;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9998;
    padding: 0 7px;

    span.logo {
      display: inline-block;
      font-size: 1.7em;
      line-height: 1.9em;
      vertical-align: top;
      width: 100%;
      position: relative;

      @media screen and (min-width: $tablets-min-width) {
        padding-left: 20px;
        text-align: center;
        width: $navigation-width;
      }

      a {
        text-decoration: none;
        color: white;

        span.p {
          font-size: 1.3em;
          font-weight: bold;
          color: $default-main-color;
        }
      }

      a.round-link {
        position: absolute;
        top: 20px;
        right: 0;

        i.fa {
          line-height: 1.6em;
          font-size: 0.9em;
          vertical-align: top;
        }

        @media screen and (min-width: $tablets-min-width) {
          right: auto;
          left: 0;
        }
      }
    }
  }
</style>

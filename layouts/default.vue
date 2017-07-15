<template>
  <main class="main-wrapper" id="app">
    <main-header @toggle="toggleMenu"></main-header>
    <div class="content-wrapper" :class="{ 'toggled-menu': toggledMenu }" id="content">
      <left-navigation></left-navigation>
      <article class="main-content">
        <nuxt/>
      </article>
    </div>
    <main-footer></main-footer>
  </main>
</template>

<script type="text/javascript">
  import MainHeader from '~components/Layout/Header'
  import LeftNavigation from '~components/Layout/Navigation'
  import MainFooter from '~components/Layout/Footer'

  export default {
    name: 'app',
    components: {
      MainHeader,
      LeftNavigation,
      MainFooter
    },
    methods: {
      toggleMenu () {
        this.toggledMenu = !this.toggledMenu
      }
    },
    data () {
      return {
        toggledMenu: false
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
  @import "../assets/scss/widgets";
  @import "../assets/scss/vars";

  body {
    background: #333333;
    padding-top: 50px;
  }

  body div.progress {
    background-color: $default-main-color !important;
  }

  a {
    color: $default-main-color;
    text-decoration: none;

    &:hover, &:focus {
      text-decoration: underline;
      outline: none;
      color: $default-main-color;
    }
  }

  @for $i from 1 to 6 {
    h#{$i} {
      color: $default-main-color;
      margin: 0 0 #{$i * 4}px ;
    }
  }

  main.main-wrapper {
    div.content-wrapper {
      display: flex;
      align-items: stretch;

      article.main-content {
        padding: 15px;
        width: 100%;
        background: #fafafa;
      }
    }
  }
</style>

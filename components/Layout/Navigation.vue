<template>
  <nav>
    <div class="nav-container">
      <h5><i class="fa fa-th-large"></i>{{ 'components.navigation.browse.title'|trans }}</h5>
      <ul>
        <li><router-link to="/" exact><i class="fa fa-home"></i>{{ 'components.navigation.browse.sections.home'|trans }}</router-link></li>
        <li><router-link to="/recommendations"><i class="fa fa-star"></i>{{ 'components.navigation.browse.sections.recommendations'|trans }}</router-link></li>
        <li><router-link to="/trends" exact><i class="fa fa-globe"></i>{{ 'components.navigation.browse.sections.trends'|trans }}</router-link></li>
        <li><a href="#"><i class="fa fa-history"></i>{{ 'components.navigation.browse.sections.history'|trans }}</a></li>
      </ul>

      <h5><i class="fa fa-user-circle"></i>{{ 'components.navigation.account.title'|trans }}</h5>
      <ul>
        <li><a href="#"><i class="fa fa-play-circle"></i>{{ 'components.navigation.account.sections.ongoing'|trans }}</a></li>
        <li><a href="#"><i class="fa fa-th-list"></i>{{ 'components.navigation.account.sections.channels'|trans }}</a></li>
        <li><a href="#"><i class="fa fa-list"></i>{{ 'components.navigation.account.sections.playlists'|trans }}</a></li>
      </ul>

      <h5><i class="fa fa-television"></i>{{ 'components.navigation.categories.title'|trans }}</h5>
      <ul>
        <li><a href="#"><i class="fa fa-music"></i>{{ 'components.navigation.categories.sections.music'|trans }}</a></li>
        <li><a href="#"><i class="fa fa-gamepad"></i>{{ 'components.navigation.categories.sections.gaming'|trans }}</a></li>
        <li><a href="#"><i class="fa fa-futbol-o"></i>{{ 'components.navigation.categories.sections.sport'|trans }}</a></li>
        <li><a href="#"><i class="fa fa-newspaper-o"></i>{{ 'components.navigation.categories.sections.news'|trans }}</a></li>
      </ul>
    </div>
  </nav>
</template>

<script type="text/javascript">
  export default {
    name: 'navigation'
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/scss/vars";

  nav {
    background: #F2F0EC;
    width: $navigation-minimized-width;
    transition: width .3s;

    div.nav-container {
      width: $navigation-width;
    }

    div.toggled-menu & {
      width: $navigation-width;
    }

    h5 {
      text-transform: uppercase;
      font-size: 1em;
      color: #222;
      margin: 20px 0 7px;
      padding: 0 10px;
      cursor: default;
    }

    ul {
      list-style-type: none;
      padding: 0;

      li a {
        display: block;
        padding: 5px 7px;
        color: #555555;
        font-size: 0.95em;
        border-left: 3px solid #F2F0EC;

        &:hover, &:active, &:focus {
          text-decoration: none;
          background: #E0E0E0;
          border-left-color: #E0E0E0;
        }

        &.nuxt-link-active {
          border-left-color: $default-main-color;
          background-color: #f9f7f3;

          .fa {
            color: $default-main-color;
          }
        }
      }
    }

    .fa {
      width: 20px;
      margin-left: 10px;
      margin-right: 18px;
    }

    @media screen and (min-width: $tablets-min-width) {
      & {
        width: $navigation-width;
      }

      div.toggled-menu & {
        width: $navigation-minimized-width;
      }
    }
  }

</style>

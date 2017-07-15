<template>
  <nav>
    <a class="round-link" href="#"><i class="fa fa-user-circle"></i></a>
    <ul>
      <li>
        <router-link to="/user/login" exact><i class="fa fa-user-circle"></i> {{ 'components.user_header.login'|trans }}</router-link> |
        <router-link to="/user/register" exact><i class="fa fa-sign-in"></i> {{ 'components.user_header.register'|trans }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script type="text/javascript">
  export default {
    name: 'user-header'
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/scss/vars";

  nav {
    display: inline-block;
    vertical-align: top;
    float: right;
    margin-right: 10px;

    a.round-link {
      position: absolute;
      right: 55px;
      top: 20px;

      i.fa {
        line-height: 1.6em;
        font-size: 1.6em;
        vertical-align: top;
      }

      @media screen and (min-width: $tablets-min-width) {
        display: none;
      }
    }

    ul {
      display: none;
      list-style-type: none;
      margin: 0;
      color: white;
      font-size: 0.9em;
      padding-top: 15px;

      a {
        color: white;

        &:hover {
          text-decoration: none;
        }
      }

      @media screen and (min-width: $tablets-min-width) {
        display: inline-block;
      }
    }
  }
</style>

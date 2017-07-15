<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <h5>P-Platform</h5>
          <ul>
            <li><a href="#">{{ 'components.footer.platform.about'|trans }}</a></li>
            <li><a href="#">{{ 'components.footer.platform.help'|trans }}</a></li>
            <li><a href="#">{{ 'components.footer.platform.terms'|trans }}</a></li>
          </ul>
        </div>
        <div class="col-sm-4">
          <h5>P-Project</h5>
          <ul>
            <li><a href="#">{{ 'components.footer.project.about'|trans }}</a></li>
            <li><a href="#">{{ 'components.footer.project.legals'|trans }}</a></li>
            <li><a href="#">{{ 'components.footer.project.association'|trans }}</a></li>
          </ul>
        </div>
        <div class="col-sm-4">
          <h5>{{ 'components.footer.tools'|trans }}</h5>
          <ul>
            <li><router-link to="/tools" exact>P-Seeder</router-link></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 copyright">
          &copy; P-Project creation
        </div>
      </div>
    </div>
  </footer>
</template>

<script type="text/javascript">
  export default {
    name: 'footer'
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  footer {
    padding: 30px 10px;
    font-size: 0.9em;
    color: #eeeeee;

    ul {
      list-style-type: none;
      text-align: left;
      padding: 0;

      li a {
        color: #eeeeee;
      }
    }

    div.copyright {
      text-align: center;
      font-size: 0.8em;
    }
  }
</style>

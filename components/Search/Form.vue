<template>
  <div>
    <form method="get" action="" @submit.prevent="search">
      <button type="submit"><i class="fa fa-search"></i></button>
      <input type="search"
             :placeholder="'components.search.form.placeholder'|trans"
             :title="'components.search.form.title'|trans"
             v-model="keywords"
             @keyup="search"
             @keyup.esc="escape($event.currentTarget)"
             name="search"
      />
      <ul>
        <li v-if="results.length === 0" class="no-result">{{ status|trans }}</li>
        <search-result v-for="result in results" :video="result"></search-result>
      </ul>
    </form>
  </div>
</template>

<script type="text/javascript">
  import SearchResult from '~components/Search/SearchResult'
  import Axios from 'axios'

  export default {
    name: 'form',
    components: {
      SearchResult
    },
    methods: {
      search () {
        if (this.keywords.length < 3) {
          this.results = []
          this.status = 'components.search.results.waiting'

          return
        }

        this.status = 'components.search.results.searching'

        Axios.get('http://localhost:8001/videos?title=' + this.keywords)
          .then((response) => {
            this.results = response.data['hydra:member']
          })
          .catch(() => {
            this.results = []
          })

        this.status = 'components.search.results.not_found'
      },
      escape (input) {
        input.blur()
      }
    },
    data () {
      return {
        keywords: '',
        status: 'components.search.results.waiting',
        results: []
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/scss/vars";

  div {
    display: inline-block;
    position: relative;

    form {
      display: none;

      @media screen and(min-width: $tablets-min-width) {
        display: block;
      }

      input {
        width: 350px;
        background: #eeeeee;
        border: 0;
        padding: 3px 10px;
        margin: 10px 0;
        border-radius: 2px;
        transition: width .5s, border .5s;
      }

      ul {
        display: none;
        list-style-type: none;
        position: absolute;
        width: 100%;
        top: 40px;
        padding: 0;
        border-top: 1px solid #ccc;
        box-shadow: 0 2px 2px rgba(40, 40, 40, 0.2);
        background: #eee;

        &:active {
          display: block;
        }

        li.no-result {
          font-size: 0.8em;
          padding: 10px 5px;
          text-align: center;
          font-style: italic;
          cursor: default;
        }
      }

      button {
        background: none;
        border: none;
        position: absolute;
        right: 3px;
        top: 12px;
        cursor: pointer;
      }

      button:focus + input, button + input:focus {
        display: block;
        width: 450px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        outline: none;

        + ul {
          display: block;
        }
      }
    }
  }
</style>

<template>
  <div>
    <h2>{{ 'page.trends.title'|trans }}</h2>
    <p>{{ 'page.trends.description'|trans }}</p>
    <video-list :videos="videos" :total="16"></video-list>
  </div>
</template>

<script type="text/javascript">
  import Translator from 'i18next'
  import Axios from 'axios'
  import VideoList from '~components/Video/VideoList.vue'

  export default {
    name: 'trends-page',
    components: {
      VideoList
    },
    data () {
      return {
        videos: []
      }
    },
    head () {
      return {
        title: Translator.t('page.trends.meta.title')
      }
    },
    mounted () {
      Axios.get('http://localhost:8001/videos')
        .then((response) => {
          this.videos = response.data['hydra:member']
        })
        .catch(() => {
          this.videos = false
        })
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>

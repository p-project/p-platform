<template>
  <div>
    <p>{{ 'page.index.description'|trans }}</p>
    <div class="row videos">
      <div class="col-sm-12 col-lg-8">
        <h3>{{ 'page.index.trends'|trans }}</h3>
        <video-list :videos="trends" :total="9"></video-list>
      </div>
      <div class="col-sm-12 col-lg-4">
        <h3>{{ 'page.index.featuring'|trans }}</h3>
        <video-list :videos="featuring" :total="2"></video-list>
      </div>
    </div>

    <div class="row videos">
      <div class="col-lg-12">
        <h3>{{ 'page.index.recommendations'|trans }}</h3>
        <video-list :videos="recommendations" :total="16"></video-list>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Translator from 'i18next'
  import Axios from 'axios'
  import VideoList from '~components/Video/VideoList.vue'

  export default {
    name: 'home-page',
    components: {
      VideoList
    },
    head () {
      return {
        title: Translator.t('page.index.meta.title')
      }
    },
    data () {
      return {
        trends: [],
        featuring: [],
        recommendations: []
      }
    },
    mounted () {
      Axios.get('http://localhost:8001/videos')
        .then((allVideos) => {
          let videos = allVideos.data['hydra:member']

          this.trends = videos.slice(2, 10)
          this.recommendations = videos.slice(10, 30)

          Axios.get('http://localhost:8001' + allVideos.data['hydra:view']['hydra:last'])
            .then((featuredVideos) => {
              let videos = featuredVideos.data['hydra:member']
              this.featuring = videos.slice(videos.length - 2, videos.length)
            })
            .catch(() => {
              this.featuring = false
            })
        })
        .catch(() => {
          this.trends = false
          this.recommendations = false
        })
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .videos {
    margin-bottom: 20px;
  }
</style>

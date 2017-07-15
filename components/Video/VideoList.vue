<template>
    <div class="row" v-if="videos">
        <video-item-loader v-for="i in total" v-if="videos.length === 0"></video-item-loader>
        <video-item :video="video" v-for="video in videos"></video-item>
    </div>
    <div class="row" v-else>
        <div class="col-lg-12">
            <p>{{ 'components.video_list.no_video'|trans }}</p>
        </div>
    </div>
</template>

<script type="text/javascript">
  import VideoItem from '~components/Video/VideoItem.vue'
  import VideoItemLoader from '~components/Video/VideoItemLoader.vue'

  export default {
    name: 'video-list',
    components: {
      VideoItem,
      VideoItemLoader
    },
    props: ['videos', 'total']
  }
</script>

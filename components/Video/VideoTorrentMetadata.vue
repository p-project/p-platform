<template>
    <div class="row">
        <div class="col-lg-12">
            <videoMagnetBtn :magnet="torrent.magnetURI"></videoMagnetBtn>
            <VideoShareButton :link="torrent.path"></VideoShareButton>
            <p>TimeRemaining : {{torrent.timeRemaining}} ms</p>
            <p>Downloaded : {{torrent.downloaded}} B</p>
            <p>Download : {{torrent.downloadSpeed}} B/s</p>
            <p>Upload : {{torrent.downloadSpeed}} B/s</p>
            <p>numPeers : {{torrent.numPeers}}</p>
        </div>
    </div>
</template>

<script type="text/javascript">
  import VideoMagnetButton from '~components/Video/VideoMagnetButton.vue'
  import VideoShareButton from '~components/Video/VideoShareButton.vue'

  export default {
    name: 'video-torrent-metadata',
    components: {
      videoMagnetBtn: VideoMagnetButton,
      VideoShareButton
    },
    props: ['torrent']
  }
</script>

<template>
  <div>
    <h2>{{ video.title }}</h2>
    <p>{{ video.description }}</p>
    <video controls></video>
    <video-torrent-metadata :torrent="torrent"></video-torrent-metadata>
  </div>
</template>

<script type="text/javascript">
    import Axios from 'axios'
    import VideoItem from '~components/Video/VideoItem.vue'
    import VideoTorrentMetadata from '~components/Video/VideoTorrentMetadata.vue'

    export default {
      name: 'watch-page',
      components: {
        VideoItem, VideoTorrentMetadata
      },
      head () {
        return {
          title: this.video.title
        }
      },
      validate ({ params }) {
        return /^\d+$/.test(params.id)
      },
      data ({ params }) {
        return {
          video: {
            title: 'Chargement...',
            metadata: {
              hash: 'Chargement...'
            }
          },
          id: params.id,
          torrent: {
            files: [
              {
                name: 'Chargement ...'
              }
            ]
          }
        }
      },
      mounted () {
        Axios.get('http://localhost:8001/videos/' + this.id)
          .then((response) => {
            this.video = response.data
            if (process.BROWSER_BUILD) {
              const WebTorrent = require('webtorrent/webtorrent.min')
              const client = new WebTorrent()
              const torrentId = response.data.magnet
              client.add(torrentId, (torrent) => {
                this.torrent = torrent
                const file = torrent.files[0]
                file.renderTo('video')
              })
            }
          })
          .catch((e) => { console.log(e) })
      }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>

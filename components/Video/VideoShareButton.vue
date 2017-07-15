<template>
  <div>
    <button v-on:click="show">Share <i class="fa fa-share-alt"></i></button>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'video-magnet-btn',
    props: ['link'],
    methods: {
      show: function (event) {
        window.prompt('Copy to clipboard: Ctrl+C', this.link)
      }
    }
  }

</script>

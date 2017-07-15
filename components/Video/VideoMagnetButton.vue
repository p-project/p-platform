<template>
  <div>
    <button v-on:click="show">Magnet <i class="fa fa-magnet"></i></button>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'video-magnet-btn',
    props: ['magnet'],
    methods: {
      show: function (event) {
        window.prompt('Copy to clipboard: Ctrl+C', this.magnet)
      }
    }
  }

</script>

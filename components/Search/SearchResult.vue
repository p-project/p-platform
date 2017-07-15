<template>
  <li>
    <router-link :to="'/watch/' + video.id" class="video-item">
      <span class="video-title">{{ video.title }}</span><br />
      <span class="video-description">{{ video.description|truncate(130, '...') }}</span>
      <router-link :to="'/watch/' + video.id" class="video-item">
  </li>
</template>

<script type="text/javascript">
  export default {
    name: 'Search-result',
    props: ['video']
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  li {
    &:not(:last-child) {
      border-bottom: 1px solid #e3e3e3;
    }

    a {
      display: block;
      padding: 5px;
      line-height: 1.2em;

      &:hover, &:focus {
        background: #e9e9e9;
        text-decoration: none;
      }

      span.video-title {
        font-weight: bold;
      }

      span.video-description {
        font-style: italic;
        font-size: 0.9em;
        color: #555;
      }
    }
  }
</style>

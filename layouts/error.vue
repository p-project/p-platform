<template>
  <div class="row">
    <div class="col-lg-12">
      <h2 v-if="error.statusCode === 404">Page not found</h2>
      <h2 v-else>An error occured</h2>
      <nuxt-link to="/">Home page</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error']
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  h2 {
    color: red;
  }
</style>

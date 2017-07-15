<template>
    <section>
        <h2>Tools</h2>
        <p>
            OK
        </p>
    </section>
</template>

<script type="text/javascript">
    import Translator from 'i18next'

    export default {
      name: 'tools-page',
      head () {
        return {
          title: Translator.t('page.tools.meta.title')
        }
      }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>

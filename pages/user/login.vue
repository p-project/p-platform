<template>
    <form action="" method="post" @submit.prevent="logIn">
        <label for="username">Username</label>
        <input v-model="username" id="username" type="text" />
        <label for="password">Password</label>
        <input v-model="password" id="password" type="password" />
        <button type="submit">Connect</button>
    </form>
</template>

<script type="text/javascript">
    import Translator from 'i18next'

    export default {
      name: 'login-page',
      data () {
        return {
          username: '',
          password: ''
        }
      },
      methods: {
        logIn () {

        }
      },
      head () {
        return {
          title: Translator.t('page.user.login.meta.title')
        }
      }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../../assets/scss/forms";
</style>

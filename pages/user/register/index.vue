<template>
    <form action="" method="post" @submit.prevent="register">
        <label for="username">Username</label>
        <input v-model="username" id="username" type="text" />
        <label for="email">Email</label>
        <input v-model="email" id="email" type="text" />
        <label for="password">Password</label>
        <input v-model="password" id="password" type="password" />
        <label for="password_confirm">Confirm password</label>
        <input id="password_confirm" type="password" />
        <button type="submit">Register</button>
    </form>
</template>

<script type="text/javascript">
    import Translator from 'i18next'

    export default {
      name: 'login-page',
      data () {
        return {
          username: '',
          email: '',
          password: ''
        }
      },
      methods: {
        register () {

        }
      },
      head () {
        return {
          title: Translator.t('page.user.register.index.meta.title')
        }
      }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../../../assets/scss/forms";
</style>

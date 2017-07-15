import Vue from 'vue'
import VueFilter from 'vue-filter'
import i18next from 'i18next'

Vue.use(VueFilter)
Vue.filter('spaceNumber', function (value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
})
Vue.filter(['trans'], function (value) {
  return i18next.t(value)
})

require('../node_modules/vuetify/src/stylus/app.styl')

import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VDivider,
  VDataIterator,
  VImg,
  VMenu,
  transitions
} from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

import store from './store'
import App from './App.vue'

Vue.use(VueAxios, axios)
Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VDivider,
    VDataIterator,
    VImg,
    VMenu,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
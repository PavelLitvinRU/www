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
  transitions
} from 'vuetify'
import { store } from './store';
import { router } from './helpers';
import App from './App.vue'

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

import { configureFakeBackend } from './helpers';
configureFakeBackend();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

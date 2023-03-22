import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import OverviewPage from './OverviewPage.vue'
import TransactionsPage from './TransactionsPage.vue'
import MainView from './MainView.vue'

// MDI Font
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  ssr: true,
  theme: {
    defaultTheme: 'dark'
  }
})

const routes = [
  { path: '/', component: OverviewPage },
  { path: '/transactions', component: TransactionsPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(MainView).use(vuetify).use(router).mount('#app')
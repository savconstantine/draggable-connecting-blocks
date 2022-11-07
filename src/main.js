import './assets/style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp({
  extends: App,
  beforeCreate() {
    this.$store.commit("initializeStore");
  },
})
  .use(store)
  .mount("#app");

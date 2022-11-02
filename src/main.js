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

let timeOut = 0;

store.subscribe((mutation, state) => {
  let store = {
    version: state.version,
    blocks: state.blocks,
    lines: state.lines,
  };

  clearTimeout(timeOut);

  timeOut = setTimeout(() => {
    localStorage.setItem("store", JSON.stringify(store));
  }, 1000);
});
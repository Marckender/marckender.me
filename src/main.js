// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


import {Vue} from 'vue'
import {VueRouter} from 'vue-router'

import router from './Router/index'
import App from './App.vue'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    router,
    components: { App }
});

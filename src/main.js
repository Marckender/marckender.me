import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/index'


const app = createApp(App)

app.use(router);

app.mount('#app');


// import VueRouter from 'vue-router'

// import App from './App.vue'

// Vue.use(VueRouter)

// new Vue({
//     el: '#app',
//     router,
//     components: { App }
// });

import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/index'
// import {ElementUI} from 'element-ui';

// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


const app = createApp(App)
// app.use(ElementUI)

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

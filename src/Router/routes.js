import Home from '../Pages/Home.vue'
import Portfolio from '../Pages/Portfolio.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    }
]

export default routes;
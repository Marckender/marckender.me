import Home from '../Pages/Home.vue'
import Portfolio from '../Pages/Portfolio.vue'
import Resume from '../Pages/Resume.vue'

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
    },
    {
        path: '/resume',
        name: 'Resume',
        component: Resume
    }
]

export default routes;
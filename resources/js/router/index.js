import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'

// import Posts from '../pages/Post.index.vue' 
// import PostDetails from '../pages/PostDetails.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/posts',
        name: 'posts.index',
        component: () => import ('../pages/Post.index.vue')
    },
    {
        path: '/posts/:slug',
        name: 'post.details',
        component: () => import ('../pages/PostDetails.vue')
    },
    {
        path: '/*',
        component: () => import('../pages/404.vue') 
    }
]

const router = new VueRouter({
    mode: 'history',
    routes, 
})

export default router
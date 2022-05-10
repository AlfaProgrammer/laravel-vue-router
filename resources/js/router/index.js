import Vue from 'vue'
import VueRouter from 'vue-router'

import Posts from '../pages/Post.index.vue' 

Vue.use(VueRouter)

const routes = [
    {
        path: '/posts',
        name: 'posts.index',
        component: Posts,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes, 
})

export default router
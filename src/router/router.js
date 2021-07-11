import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '../pages/HomeScreen.vue';


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomeScreen },
        {path: '/:notFound(.*)', redirect:'/'}
    ]
})
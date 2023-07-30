import {createRouter, createWebHistory} from "vue-router";
import Home from "./components/Home.vue";


const routes = [
    {
        name:'Home',
        path:'/',
        component: Home
    },
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})
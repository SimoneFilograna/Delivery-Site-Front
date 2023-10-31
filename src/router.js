import { createRouter, createWebHistory } from "vue-router";

// Importazione pagine

import HomePage from "./pages/Home.vue";

const routes= [
    {
        path: "/",
        name: "home",
        component: HomePage
    }
]

const router= createRouter ({
    history: createWebHistory(),
    routes
})

export {router}
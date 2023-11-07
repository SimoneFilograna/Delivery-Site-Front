import { createRouter, createWebHistory } from "vue-router";

// Importazione pagine

import HomePage from "./pages/Home.vue";
import Checkout from "./pages/Checkout.vue";

const routes= [
    {
        path: "/",
        name: "home",
        component: HomePage
    },
    {
        path: "/checkout",
        name: "checkout",
        component: Checkout
    }
]

const router= createRouter ({
    history: createWebHistory(),
    routes
})

export {router}
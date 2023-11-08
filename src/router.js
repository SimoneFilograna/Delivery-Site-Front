import { createRouter, createWebHistory } from "vue-router";

// Importazione pagine
import NotFoundPage from "./pages/NotFoundPage.vue";
import RestaurantShowPage from "./pages/RestaurantShowPage.vue";
import HomePage from "./pages/Home.vue";
import Checkout from "./pages/Checkout.vue";

const routes= [
    {
        path: "/",
        name: "home",
        component: HomePage
    },

    {
        path:"/restaurant/:id",
        name:"restaurant.show",
        component: RestaurantShowPage,        
    },

    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFoundPage,
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
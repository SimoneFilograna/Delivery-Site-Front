import { createRouter, createWebHistory } from "vue-router";

// Importazione pagine
import NotFoundPage from "./pages/NotFoundPage.vue";
import RestaurantShowPage from "./pages/RestaurantShowPage.vue";
import HomePage from "./pages/Home.vue";
import Checkout from "./pages/Checkout.vue";
import Success from "./pages/Success.vue";

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
        path: "/checkout",
        name: "checkout",
        component: Checkout,

        beforeEnter: (to, from, next) =>{
            const savedCart = JSON.parse(localStorage.getItem('cartItems'))
            console.log(savedCart)
            if (savedCart == null || savedCart.length == 0) {
                next({name: 'home'})
            } else {
                next()
            }
        }
    },

    {
        path: "/success",
        name: "success",
        component: Success,
        
    },
    
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFoundPage,
    },

]

const router= createRouter ({
    history: createWebHistory(),
    routes
})

export {router}
import { createRouter, createWebHistory } from "vue-router";

// Importazione pagine
import NotFoundPage from "./pages/NotFoundPage.vue";
import RestaurantShowPage from "./pages/RestaurantShowPage.vue";
import HomePage from "./pages/Home.vue";
import Checkout from "./pages/Checkout.vue";
import Success from "./pages/Success.vue";
import Rejected from "./pages/Rejected.vue";
import Welcome from "./pages/Welcome.vue";
import AboutUs from "./pages/AboutUs.vue"

const routes= [

    {
        path: "/",
        name: "welcome",
        component: Welcome,
    },
    {
        path: "/about",
        name: "about",
        component: AboutUs
    },
    {
        path: "/home",
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
            // console.log(savedCart)
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
        path: "/rejectd",
        name: "rejected",
        component: Rejected,
        
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
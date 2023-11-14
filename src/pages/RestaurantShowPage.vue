<script>

import axios from 'axios';
import PlateCard from '../components/PlateCard.vue'

export default {
    components: {
        PlateCard,
    },
    data() {
        return {
            restaurant: {},
            cartItems: [],
            totalPrice: {},
        };
    },

    methods: {
        //fetching restaurant data from api
        fetchData() {
            axios.get('http://127.0.0.1:8000/api/restaurants/' + this.$route.params.id)
                .then((resp) => {
                    this.restaurant = resp.data;
                }).catch((e) => {
                    this.$router.push({ name: "not-found" })
                })
        },

        //fetching img data from backend
        getRestaurantImageUrl(restaurant) {
            return `http://127.0.0.1:8000/storage/${restaurant.restaurant_image}`;
        },

        //function that obtain and manipoulate data plate

        addNewItem(element = null) {

            if(this.cartItems.length !== 0 && this.cartItems[0].restaurant_id !== this.restaurant.id){
                alert("attenzione il carrello non è vuoto")
            } else {
                //find index cart item
            const checkIndexArray = this.cartItems.findIndex(item => item.id === element.id);
            console.log(checkIndexArray)


            if (checkIndexArray !== -1) {
                // if plate is in cartItems
                this.cartItems[checkIndexArray].quantity++
                console.log(this.cartItems)
            } else {
                // create new item cart
                this.cartItems.push({
                    id: element.id,
                    plate_name: element.plate_name,
                    price: element.price,
                    quantity: 1,
                    restaurant_id: element.restaurant_id,
                })
                console.log(this.cartItems)
            }

            //save in localstorage
            localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
            }

            
        },

        //remove entire cart

        removeItem(index) {
            this.cartItems.splice(index, 1);

            //save in localstorage
            localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        },

        // remove single item from crat with icon

        reduceItem(index) {
            if (this.cartItems[index].quantity > 1) {
                this.cartItems[index].quantity--; // Reduce quantity
            } else {
                // if 1 remove form cart
                this.removeItem(index);
            }
            console.log(this.cartItems)
            localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
        },

        // clearCartitems and set new Local Storage
        clearCart(){
            this.cartItems.splice(0),
            localStorage.clear();
            console.log(this.cartItems)
        },

        // single price for plate

        singlePlatePrice(a,b){
            return (a * b).toFixed(2)
        },

        // total price

        totalSum() {
            let total = 0;
            this.cartItems.forEach(plate => {
                total += plate.quantity * plate.price;
            });
            this.totalPrice=total.toFixed(2);
            localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
            localStorage.setItem('restaurant_name', JSON.stringify(this.restaurant.restaurant_name));
            return total;
        },

    },
    mounted() {

        // Load items from localStorage on component mount 
        this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        //load restaurant API Call
        this.fetchData();
    },
}

</script>

<template>
    <div class=" container-fluid hero-image">
        <img src="/public/img/showrestaurant-jam.png" class="top-banner" alt="">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-9">

                <!-- restaurant info -->

                <div class="row flex-column align-items-center flex-md-row gap-2">

                    <div class="col text-center ">
                        <h1 class="display-2">{{restaurant.restaurant_name }}</h1>
                        <p class="mt-2">Tel:{{ restaurant.restaurant_phone }}</p>
                        <p>Via: {{ restaurant.restaurant_address }}</p>
                        <p>P.IVA: {{ restaurant.vat_number }}</p>
                        
                    </div>
                </div>
                <div class="plates-container mt-5">
                    <div class="row">
                        <div class="col-12" v-for="plate in restaurant.plates">

                            <div class="box">
                                <!-- @addcart receive emit from son platecard -->
                                <PlateCard :Plate="plate" @addtoCart="addNewItem" />
                            </div>

                        </div>

                    </div>
                </div>

                <!-- canvas right -->

                <button class="btn special" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-cart-plus"></i></button>
                
                <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Il tuo carrello</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">

                            <!-- Shopping Cart -->
                        <div class="shopping-cart text-white d-flex flex-column">
                        
                            <p class="order-title p-3">Hai ordinato:</p>

                        
                            <div class="itemCard d-flex justify-content-between" v-for="item, index in cartItems">

                                <div class="d-flex align-items-baseline w-100" v-if="item.restaurant_id == restaurant.id">
                                    <div class="plate_name">
                                        <p >{{ item.plate_name }}</p>
                                    </div>

                                    <div class="d-flex align-items-center interaction">
                                        <!-- remove button cart -->
                                        <button class="cart-button" @click="reduceItem(index)">
                                            <i class="fa-solid fa-minus"></i>
                                        </button>
                                    
                                        <!-- quantity-- -->
                                        <div class="quantity w-25 px-1">
                                            <p>{{ item.quantity }}</p>
                                        </div>
                                    
                                        <!-- add button cart -->
    
                                        <button  class="cart-button" @click="addNewItem(item)">
                                            <i class="fa-solid fa-plus"></i>
                                        </button>                                         
                                    </div>

                                    <p class="price">{{ singlePlatePrice(item.price, item.quantity) }} €</p>
                                </div>

                            </div>

                        

                            <!-- checkout button -->
                            <div class="text-center mt-auto" v-if="cartItems.length !== 0 && cartItems[0].restaurant_id === restaurant.id">

                                <!-- total price -->
                                <div class="d-flex justify-content-between">
                                    <p>Totale:</p>
                                    <p>{{totalSum().toFixed(2)}} €</p>
                                </div>

                                <!-- checkout button -->

                                <RouterLink :to="{ name: 'checkout' }" class="btn my-button" v-on:click.prevent="cartItems.length === 0 ? null : showError()">Checkout</RouterLink>
                            </div> 

                            <div v-if="cartItems.length !== 0 && cartItems[0].restaurant_id !== restaurant.id"> 
                                <div class="full-cart p-5"> 
                                    <p class="pb-4"> Attenzione il tuo carrello non è vuoto</p>
                                    <small>Cliccando qui cancellerai iul tuo carrello</small>
                            
                                    <div class="text-center">
                                        <button class="btn alert-button mt-4" @click="clearCart()">Svuota il carrello</button>
                                    </div>

                                </div>
                            </div> 
                        </div>
                    </div>
                </div>




                
            </div>


            
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables";

.top-banner{
    height: 250px;
    width: 100%;
    filter: brightness(50%);
    margin-bottom: 3rem;
    object-fit: cover;
    object-position: center;
}

// canvas style

.offcanvas-end{
    background-color: variables.$bg_color;

    .offcanvas-title{
        color: white;
    }

    .btn-close{
        color: white;
        background-color: transparent;
        border: 1px solid white;
    }
    .shopping-cart{
        height: 100%;
        border: 1px solid variables.$gold_text;
        padding: 1.5rem;
    
        .order-title{
            border-bottom: 1px solid variables.$gold_text;;
        }

        .my-button{
        background-color: variables.$gold_text;
        border-radius: 0;
        padding: .1rem 1.5rem;
        font-weight: 600;
        font-size: 1.2rem;

        &:hover{
        background-color: variables.$bg_color;;
        border-color: variables.$gold-text;
        color: variables.$gold-text;
            }
        }

        .plate_name{
            flex-basis: 40%;
        }
        .interaction,
        .price{
            flex-basis: 30%;
        }
        .cart-button{
            background-color: variables.$gold_text;

            &:hover{
                background-color: variables.$bg_color;;
                border-color: variables.$gold-text;
                color: variables.$gold-text;
            }
        }

        .full-cart{
            border: 1px solid rgb(245, 101, 5);
            background-color: rgba(255, 221, 159, 0.788);

            .alert-button{
                background-color: rgb(245, 101, 5);
                color: white;

            &:hover{
                background-color: variables.$bg_color;
                color: rgb(245, 101, 5);
                border: 1px solid rgb(245, 101, 5)
            }
            }
        }
        
    }
}

.special{
    background-color: variables.$gold_text;
    border-radius: 50%;
    font-size: 1.5rem;
    position: fixed;
    bottom: 8%;
    right: 5%;
    &:hover{
        background-color: variables.$bg_color;;
        border-color: variables.$gold-text;
        color: variables.$gold-text;
        }
}


</style>
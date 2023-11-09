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
            return a * b
        },

        // total price

        totalSum() {
            let total = 0;
            this.cartItems.forEach(plate => {
                total += plate.quantity * plate.price;
            });
            this.totalPrice=total.toFixed(2);
            return total.toFixed(2);
        }




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

    <div class="container">
        <div class="row">
            <div class="col-12 col-md-9">
                <h1>{{ restaurant.restaurant_name }}</h1>
                <img :src="getRestaurantImageUrl(restaurant)" class="card-img-top" />
                <p>{{ restaurant.restaurant_phone }}</p>
                <div class="plates-container">
                    <div class="row">
                        <div class="col-12" v-for="plate in restaurant.plates">

                            <!-- @addcart receive emit from son platecard -->
                            <PlateCard :Plate="plate" @addtoCart="addNewItem" />
                        </div>

                    </div>
                </div>

            </div>

            <!-- Shopping Cart -->
            <div class="col-12 col-md-3 shopping-cart border rounded-3">

                <h3>Carrello Ordini</h3>
                <p class="border-bottom">Hai ordinato:</p>

                
                <div class="itemCard d-flex justify-content-between" v-for="item, index in cartItems">

                    <div class="d-flex align-items-center" v-if="item.restaurant_id == restaurant.id">
                        <p>{{ item.plate_name }}</p>

                        
                        <!-- remove button cart -->
                        
                        <button @click="reduceItem(index)">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        
                        <!-- quantity-- -->
                        <p class="px-4">{{ item.quantity }}</p>
                        
                        <!-- add button cart -->

                        <button @click="addNewItem(item)">
                            <i class="fa-solid fa-plus"></i>
                        </button>                                         

                        <p>{{ singlePlatePrice(item.price,item.quantity) }} €</p>
                    </div>

                </div>

                

                <!-- checkout button -->
                <div class="text-center" v-if="cartItems.length !== 0 && cartItems[0].restaurant_id === restaurant.id">

                    <!-- total price -->
                    <div>
                        <p>Totale: {{ totalSum() }} €</p>
                    </div>

                    <!-- checkout button -->

                    <RouterLink :to="{name: 'checkout'}" class="btn btn-primary" v-on:click.prevent="cartItems.length === 0 ? null : showError()">Checkout</RouterLink>
                </div> 

                <div v-if="cartItems.length !== 0 && cartItems[0].restaurant_id !== restaurant.id"> 
                    <div class="border border-danger p-5"> 
                        <p class="pb-4"> Attenzione il tuo carrello non è vuoto</p>
                        <small>Cliccando qui cancellerai iul tuo carrello</small>
                    
                        <div>
                            <button class="btn btn-danger mt-4" @click="clearCart()">Svuota il carrello</button>
                        </div>

                    </div>
                </div> 
            </div>

            
        </div>
    </div>
</template>

<style lang="scss" scoped>
/*{
    border: 1px red dashed;
    min-height: 20px;
}*/

.card-img-top {
    max-width: 30vw;
}
</style>
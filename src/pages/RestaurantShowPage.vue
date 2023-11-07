<script>

import axios from 'axios';
import PlateCard from '../components/PlateCard.vue'

export default {
    components:{
        PlateCard,
    },
  data() {
    return {
      restaurant: {},
      cartItems: [],
    };
  },
  methods:{
    //fetching restaurant data from api
    fetchData(){
        axios.get('http://127.0.0.1:8000/api/restaurants/'+this.$route.params.id)
        .then((resp)=>{
            this.restaurant = resp.data;
        }) .catch((e)=>{
            this.$router.push({name: "not-found"})
        }) 
    },
    //fetching img data from backend
    getRestaurantImageUrl(restaurant) {
      return `http://127.0.0.1:8000/storage/${restaurant.restaurant_image}`;
    },

    //function that receive data from card emit
    addItemToCart(element){
        this.cartItems.push(element);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },

    // add item to cart with icon

    addNewItem(element){
        this.cartItems.push(element);
        console.log(this.cartItems)
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },

    // remove item from crat with icon

    removeItem(index){
        this.cartItems.splice(index, 1);
        console.log(this.cartItems)
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    }

  },
  mounted() {
    // Load items from localStorage on component mount 
    this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; 

    this.fetchData();
  },
}

</script>

<template>
    <h1>ciao</h1>
 

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
                            <PlateCard :Plate="plate" @addtoCart="addItemToCart"/>
                        </div>

                    </div>
                </div>
                
            </div>

            <!-- Shopping Cart -->
            <div class="col-12 col-md-3 shopping-cart border rounded-3">

                <h3>Carrello Ordini</h3>
                <p class="border-bottom">Hai ordinato:</p>

                <div class="itemCard d-flex justify-content-between" v-for="item, index in cartItems">
                    <div class="d-flex align-items-center">
                        <p>{{ item.plate_name }}</p>

                        <!-- add button cart -->

                        <button @click="addNewItem(item)">
                            <i class="fa-solid fa-plus"></i>
                        </button>

                        <!-- remove button cart -->

                        <button @click="removeItem(index)">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>
                    <p>{{ item.price }} €</p>
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

.card-img-top{
    max-width: 30vw;
}

</style>
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
            console.log(this.$route.params.id);
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
    },

    addNewItem(element){
        this.cartItems.push(element);
        console.log(this.cartItems)
    }

  },
  mounted() {
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

                <div class="itemCard d-flex justify-content-between" v-for="item in cartItems">
                    <div class="d-flex align-items-center">
                        <p>{{ item.plate_name }}</p>
                        <button @click="addNewItem(item)">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                        <button>
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
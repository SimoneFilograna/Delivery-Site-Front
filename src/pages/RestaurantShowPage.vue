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
    getRestaurantImageUrl(restaurant) {
      return `http://127.0.0.1:8000/storage/${restaurant.restaurant_image}`;

    },

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
                            <PlateCard :Plate="plate"/>
                        </div>

                    </div>
                </div>
                
            </div>

            <!-- Shopping Cart -->
            <div class="col-12 col-md-3">


            </div>
        </div>
    </div>



</template>

<style>
*{
    border: 1px red dashed;
    min-height: 20px;
}

.card-img-top{
    max-width: 30vw;
}
</style>
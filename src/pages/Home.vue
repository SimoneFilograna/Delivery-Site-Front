<script>
import axios from 'axios';

export default {
    data() {
        return {
            // List of restaurants 
            restaurants: [],
            // List of cuisines types
            cuisines: [],
            // List of the selected cuisines by client
            cusineSelected: [],
            // Name of restaurant to search
            searchText: '',
        }
    },

    methods: {
        //GET API call that retrives the list of restaurants
        fetchRestaurants() {
            //Call for restaurants name to API
            if (this.searchText) {

                console.log(this.searchText);

                axios.get('http://127.0.0.1:8000/api/restaurants', {
                    // headers: {
                    //     "Access-Control-Allow-Origin": "*"
                    // },
                    params: {
                        restaurant_name: this.searchText,
                    }
                }).then((response) => {
                    // save datas in the restaurant array
                    this.restaurants = response.data;

                })
            }
            else {
                //axios get call to URL
                axios.get("http://127.0.0.1:8000/api/restaurants", {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }).then((response) => {
                    // save datas in the restaurant array
                    this.restaurants = response.data;
                })
            }
        },

        //GET API call that retrives the list of cuisines
        fetchCuisines() {
            //axios get call to URL
            axios.get("http://127.0.0.1:8000/api/cuisines", {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }).then((response) => {
                // save datas in the cuisine array
                this.cuisines = response.data;
            })
        },

        // Add/remove to array of selected cuisines if checkbox is clicked by client 
        UpdateSlectedCuisines(event) {
            //check if the checkbox is flagged
            if (event.target.checked) {
                //add the value to the cuisine selected
                this.cusineSelected.push(event.target.value);
            } else {
                //get the value of the checkbox
                const value = event.target.value;
                //loop through the array of cuisine selected and remove this checkbox
                for (let cuisineChecked of this.cusineSelected) {
                    if (cuisineChecked === value) {
                        const index = this.cusineSelected.indexOf(cuisineChecked);
                        this.cusineSelected.splice(index, 1);
                    }
                }
            }
        },

        //GET API call that sends the cuisines selected and retrives the filtered restaurants
        filterData(event) {
            //call the update cuisine function
            this.UpdateSlectedCuisines(event);

            //create new URL search params object 
            let params = new URLSearchParams();

            //append the values that we want to pass in the axios call
            for (let i = 0; i < this.cusineSelected.length; i++) {
                params.append(`cuisine${i + 1}`, this.cusineSelected[i]);
            }

            //create request object
            let request = {
                params: params
            }

            //axios get call to URL
            axios.get("http://127.0.0.1:8000/api/restaurants", request)
                .then((response) => {
                    this.restaurants = response.data;
                })
        },

        //get imageURL path correct
        getImageURL(restaurant) {
            return `http://127.0.0.1:8000/storage/${restaurant.restaurant_image}`;
        }
    },

    mounted() {
        this.fetchRestaurants();
        this.fetchCuisines();
    }
}
</script>

<template>
    <div class="container-fluid p-5">
        <div class="row lateralSpacing ">
            <div class="left-side d-none d-sm-flex flex-column col-1 p-0"><!--da rivedere-->
                <h5 class="filterTitle text-center gold-text">Filtro Cucine</h5>

                <div class="list-group-item pt-3 d-flex flex-column">
                    <div class="form-check m-2 " v-for="cuisine in cuisines" :key="cuisine.id">
                        <input class="form-check-input" type="checkbox" @click="filterData($event)"
                            :value="cuisine.cuisine_name" :id="cuisine.id">
                        <label class="form-check-label text-white" :for="cuisine.id">
                            {{ cuisine.cuisine_name }}
                        </label>
                    </div>
                </div>

            </div>

            <div class="col">
                <form action="">

                </form>
                <h2 class="filterTitle mb-4 gold-text">Ristoranti che consegnano a Boolean City</h2>

                <!-- searchbar for restaurants -->
                <div>
                    <input v-model="searchText" @keyup="fetchRestaurants" class="form-control" name="searchText"
                        id="searchText" placeholder="Cerca ristorante">


                </div>

                
                    <div class="row text-center justify-content-around">
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2 d-flex" v-for="restaurant in restaurants"
                            :key="restaurant.id">

                            <!-- link to ShowRestaurantPage -->

                            <router-link class="text-decoration-none" :to="{ name: 'restaurant.show', params: { id: restaurant.id } }">

                                <div class="card h-100">
                                    <h5 class="gold-text card-title">{{ restaurant.restaurant_name }}</h5>
                                    <img :src="getImageURL(restaurant)" class="card-img-top h-75" alt="">
                                    <div class="card-body d-flex flex-wrap">
                                        <p class="card-text text-white p-0 m-1 d-flex" v-for="cuisine in restaurant.cuisines">
                                            {{ cuisine.cuisine_name }}
                                        </p>
                                    </div>
                                </div>

                            </router-link>

                        </div>
                    </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/partials/variables' ;
//  *{
//      border: 1px dashed red;
//  }



.filterTitle {

    font-weight: 500;
    margin-top: 32px;
}

.form-check-label {

    font-size: 1rem;
    padding-left: 10px;
}

.form-check .form-check-input {
    margin-left: 0;
}

.left-side {
    min-width: 180px; //sotto questa soglia si spacca il layout
}
.gold-text{
    color:$gold_text;
}
.card-img-top {
    object-position: center;
    object-fit: cover;
}
.card{
    background-color: $bg_color;
    border: 1px solid rgba(255, 255, 255, 0.338);
    box-shadow:  inset 0px 10px 27px -8px #141414,
                 inset 0px -10px 18px -8px $gold_text,
                  5px 5px 15px 5px rgba(0,0,0,0);
    p{
        font-size: 0.9rem;
        text-decoration: none;
    }

}
</style>
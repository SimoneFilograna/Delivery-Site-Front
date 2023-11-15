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
    <div class="container-fluid">
        <div class="row d-flex flex-column">
            <div class="check-select d-flex flex-column">
                <h5 class="filterTitle text-center gold-text">Filtro Cucine</h5>

                <div class="checkers d-flex overflow-auto">
                    <div class="d-flex single-check" v-for="cuisine in cuisines" :key="cuisine.id">
                        <input class="form-check-input" type="checkbox" @click="filterData($event)"
                            :value="cuisine.cuisine_name" :id="cuisine.id">
                        <div class="form-check-label text-white mx-1" :for="cuisine.id">
                            {{ cuisine.cuisine_name }}
                        </div>
                    </div>
                </div>

            </div>

            <div class="scrollable">

                <div class="d-flex flex-column px-4 flex-shrink-1">

                    <h2 class="filterTitle mb-4 text-center gold-text">Ristoranti che consegnano a Boolean City</h2>
                    <!-- searchbar for restaurants -->
                    <form>
                        <input v-model="searchText" @keyup="fetchRestaurants" class="form-control w-75 mx-auto" name="searchText"
                            id="searchText" placeholder="Cerca ristorante">

                    </form>

                </div>




                <div class="row scroll-side my-3">
                    
                    <div class="d-flex flex-wrap ">

                        <div class="v-card d-flex col-12 col-sm-6 col-md-4 col-lg-3" v-for="restaurant in restaurants" :key="restaurant.id">
                            <!-- link to ShowRestaurantPage -->

                            <router-link class="text-decoration-none"
                                :to="{ name: 'restaurant.show', params: { id: restaurant.id } }">

                                <div class="mx-2 card w-100 h-100">
                                    <h5 class="gold-text text-center card-title my-2">{{ restaurant.restaurant_name }}</h5>
                                    <img :src="getImageURL(restaurant)" class="card-img-top " alt="">
                                    <div class="card-body d-flex flex-wrap">
                                        <p class="card-text text-white p-0 m-1 d-flex"
                                            v-for="cuisine in restaurant.cuisines">
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
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/partials/variables';


.container-fluid {
    display: flex;
    height: 92vh; // // /// // this must be bigger than .scrollable height /// // // //
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 1;
    overflow: hidden;
    padding: 0 ;
    padding: 0 10%;

    //background-image: url("/public/pngwing.com (6).png");
    background-position:center;
    background-repeat: no-repeat;
    background-attachment: fixed;

}

.scrollable {
    height: 84vh; // // /// // this must be smaller than .container-fluid height /// // // //
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    overflow-y: auto;
}


.filterTitle {
   margin: 18px;
}

.form-check-label {
    font-size: 1rem;
}


.single-check{
    margin: 0 1rem;
}

.scroll-side {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 1rem;
    height: auto;
}

.gold-text {
    color: $gold_text;
}

.card-img-top {
    object-position: center;
    object-fit: cover;
    height: 100%;
}

.v-card{
    padding: 0.5rem;

}

.card {
    background-color: $bg_color;
    border: 1px solid rgba(255, 255, 255, 0.338);
    box-shadow: inset 0px 10px 27px -8px #141414,
        inset 0px -10px 18px -8px $gold_text,
        5px 5px 15px 5px rgba(0, 0, 0, 0);
    p {
        font-size: 0.8rem;
        text-decoration: none;
    }
}

.card:hover{

    box-shadow: inset 0px 10px 27px -8px #141414,
        inset 0px -10px 18px -8px $gold_text,
        3px 2px 8px 1px rgb(216, 216, 216),
        5px 5px 15px 10px #c3c3c359,
        14px 11px 15px 0px rgba(193, 193, 193, 0.223);
}


</style>
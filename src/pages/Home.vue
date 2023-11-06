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
                cusineSelected: []
            }
        },

        methods: {
            //GET API call that retrives the list of restaurants
            fetchResturants() {
                //axios get call to URL
                axios.get("http://127.0.0.1:8000/api/restaurants", {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }).then((response) => {
                    // save datas in the restaurant array
                        this.restaurants = response.data;
                    })
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
                if(event.target.checked) {
                    //add the value to the cuisine selected
                    this.cusineSelected.push(event.target.value);
                } else {
                    //get the value of the checkbox
                    const value = event.target.value;
                    //loop through the array of cuisine selected and remove this checkbox
                    for(let cuisineChecked of this.cusineSelected) {
                        if(cuisineChecked === value) {
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
                for(let i = 0; i < this.cusineSelected.length; i++ ) {
                    params.append(`cuisine${i+1}`, this.cusineSelected[i]);
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
            this.fetchResturants();
            this.fetchCuisines();
        }
    }
</script>

<template>
    <div class="container-fluid p-0 overflow-x-hidden">
        <div class="row lateralSpacing ">
            <div class="col-2">
                <div class="filterTitle">Filtro Cucine</div>

                <div class="list-group-item pt-3">
                    <div class="form-check mb-2" v-for="cuisine in cuisines" :key="cuisine.id">
                        <input class="form-check-input" type="checkbox" 
                            @click="filterData($event)" :value="cuisine.cuisine_name" :id="cuisine.id">
                        <label class="form-check-label" :for="cuisine.id">
                            {{ cuisine.cuisine_name }}
                        </label>
                    </div>
                </div>

            </div>

            <div class="col-10">
                <div class="filterTitle mb-4">Ristoranti che consegnano a Milano</div>

                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-3 mb-4" v-for="restaurant in restaurants" :key="restaurant.id">
                            <div class="card h-100">
                                <img :src="getImageURL(restaurant)" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
                                    <p class="card-text" v-for="cuisine in restaurant.cuisines">
                                        {{ cuisine.cuisine_name }}
                                    </p>
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
  .lateralSpacing {
    padding: 0px 64px;
  }

  .filterTitle {
    color: black;
    font-weight: 500;
    font-size: 24px;
    margin-top: 32px;
  }

  .form-check-label {
    color: black;
    font-size: 18px;
    padding-left: 10px;
  }

  .form-check .form-check-input {
    margin-left: 0;
  }
</style>
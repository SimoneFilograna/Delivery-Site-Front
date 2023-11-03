<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                restaurants: [],
                cusineSelected: []
            }
        },

        methods: {
            fetchResturants() {
                axios.get("http://127.0.0.1:8000/api/restaurants", {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }).then((response) => {
                        this.restaurants = response.data;

                        console.log(this.restaurants);
                    })
            },

            filterData() {
                // @ts-ignore
                var params = new URLSearchParams();

                

                axios.get("http://127.0.0.1:8000/api")
                    // @ts-ignore
                    .then((Response) => {

                    })
            },

            getImageURL(restaurant) {
                return `http://127.0.0.1:8000/storage/${restaurant.restaurant_image}`;
            }
        },

        mounted() {
            this.fetchResturants();
        }
    }
</script>

<template>
    <div class="container-fluid p-0 overflow-x-hidden">
        <div class="row lateralSpacing ">
            <div class="col-2">
                <div class="filterTitle">Filtro Cucine</div>

                <div class="list-group-item pt-3">
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Italiano
                        </label>
                    </div>

                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
                        <label class="form-check-label" for="flexCheckDefault2">
                            Cinese
                        </label>
                    </div>

                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3">
                        <label class="form-check-label" for="flexCheckDefault3">
                            Giapponese
                        </label>
                    </div>

                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4">
                        <label class="form-check-label" for="flexCheckDefault4">
                            Kebab
                        </label>
                    </div>

                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5">
                        <label class="form-check-label" for="flexCheckDefault5">
                            Poke
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
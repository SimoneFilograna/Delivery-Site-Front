<script>
export default {
    props: {
        Plate: {
            type: Object,
            required: true,
        }
    },
    methods: {

        //obtain image from database with API call
        getPlateImageUrl(plate) {
            return `http://127.0.0.1:8000/storage/${plate.plate_image}`;
        },


        //function emit data to father RestaurantSgowPage
        addToCartArray(){
            this.$emit("addtoCart", this.Plate)
        }
    }
}
</script>

<template>
    <div class="card mb-3 text-center">
        <div class="row align-items-md-center">

            <!-- image -->
            <div class="col-12 col-md-5 col-lg-3">
                <img :src="getPlateImageUrl(Plate)" class="card-img-top" />
            </div>
            <div class="col-12 col-md-6 col-lg-9">
                <div class="card-body text-md-start">

                    <form @submit.prevent="addToCartArray">
                    <h5 class="card-title">{{ Plate.plate_name }}</h5>
                    <p class="card-text">{{ Plate.description }}</p>
                    <p class="card-text"><small class="">{{ Plate.ingredients }}</small></p>

                    <div class="d-flex justify-content-center align-items-center gap-3 justify-content-md-start">
                        <p class="card-text">{{ Plate.price }} €</p>              
                        <button class="btn my-button"><i class="fa-solid fa-cart-plus"></i></button>
                    </div>


                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../styles/partials/variables";
    .card{
        color: white;
        background-color: transparent;
        border: 1px solid variables.$gold_text;
        padding: .2rem;
        box-shadow: inset 0px 10px 27px -8px #141414,         
        inset 0px -10px 18px -8px variables.$gold_text,         
        5px 5px 15px 5px rgba(0, 0, 0, 0);

        .card-img-top{
            aspect-ratio: 1/1;
            object-fit: cover;
            
            @media screen and (min-width: 380px){
                width: 50%;
            }
            @media screen and (min-width: 768px){
                width: 100%;
            }
            
        }
        .my-button{
        background-color: variables.$gold_text;
        border-radius: 0;
        aspect-ratio: 1/1;

        font-weight: 600;
        font-size: .8rem;
    
        &:hover{
            color: variables.$gold-text;
            background-color: transparent;
            border-color: variables.$gold-text;
        }
    }

    }
</style>
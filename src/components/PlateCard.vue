<script>
export default {
    props: {
        Plate: {
            type: Object,
            required: true,
        }
    },
    methods: {
        getPlateImageUrl(plate) {
            return `http://127.0.0.1:8000/storage/${plate.plate_image}`;

        }
    }
}
</script>

<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="getPlateImageUrl(Plate)" class="card-img-top" />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ Plate.plate_name }}</h5>
                    <p class="card-text">{{ Plate.description }}</p>
                    <p class="card-text"><small class="text-body-secondary">{{ Plate.ingredients }}</small></p>
                    <p class="card-text">{{ Plate.price }}</p>
                

                    <button class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
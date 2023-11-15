<script>
export default {

    methods: {
        
    },

    mounted(){
        localStorage.clear();
    }
};
</script>

<template>
    <div class="container-fluid d-flex text-center justify-content-center flex-column">

        <div class="p-3 mx-auto col-6 border border-3 border-success rounded">
            <h1 class="text-success">Pagamento riuscito</h1>
            <p class="text-success">il pagamento è andato a buon fine , riceverai una mail di avvenuta transazione</p>
            <h3 class="text-success">Grazie per aver scelto Deliveboo</h3>
            <RouterLink :to="{name: 'home'}" class="my-button">Torna alla Home</RouterLink>
        </div>

    </div>


</template>

<style lang="scss" scoped>
    @use "../styles/partials/variables";


    .container-fluid{
        height: 92vh;
        background-image: url('https://static.vecteezy.com/system/resources/previews/013/220/079/original/thanks-thank-you-doodle-hand-drawing-chalk-text-background-for-presentation-closing-statement-typography-for-banner-poster-greeting-card-vector.jpg');
        background-position: center;
    }

    .mx-auto{
        background-color: rgba(195, 195, 195, 0.934);
    }

    .my-button{
        text-decoration: none;
        background-color: variables.$gold_text;
        border-radius: 0;
        padding: .1rem 1.5rem;
        font-weight: 600;
        font-size: 1.2rem;
        transition-property: background color;
        transition-duration: 0.7s;
        color: variables.$bg_color;

        &:hover{
        background-color: variables.$bg_color;;
        border-color: variables.$gold-text;
        color: variables.$gold-text;
    }}
</style>
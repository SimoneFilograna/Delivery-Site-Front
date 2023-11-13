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
            <p>il pagamento è andato a buon fine , riceverai una mail di avvenuta transazione</p>
            <h3>Grazie per aver scelto deliveboo</h3>
            <RouterLink :to="{name: 'home'}" class="text-decoration-none logo_text">Torna alla Home</RouterLink>
        </div>

    </div>


</template>

<style lang="scss" scoped>


.container-fluid{
    height: 92vh;
    background-image: url('https://static.vecteezy.com/system/resources/previews/013/220/079/original/thanks-thank-you-doodle-hand-drawing-chalk-text-background-for-presentation-closing-statement-typography-for-banner-poster-greeting-card-vector.jpg');
    background-position: center;

}

.mx-auto{

    background-color: rgba(195, 195, 195, 0.934);

}
</style>
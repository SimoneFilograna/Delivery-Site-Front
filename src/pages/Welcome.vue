<script></script>
<template>

    <div class="container jumbotron mt-5">
        <div class="col text-light">
            <h2 class="display-2 fw-bold fst-italic text-center">Always, anywhere, whenever <span class="d-md-none">you want.</span><br><span class="d-md-inline" > you want</span> </h2>
        </div>
        <div class="jumbo-main row justify-content-md-center mt-5 mt-md-0 px-lg-5">
            <div class="col-12 col-md-8 mb-3 d-md-flex align-items-sm-center gap-md-3">
                <div class="img-container order-md-last mb-5">
                    <img src="/public/img/hero-1.png" alt="" class="pasta-img">
                </div>
                <p class="text-center mt-3 text-white-50 lh-lg">Delizia culinaria a portata di click: gustati i sapori autentici sempre ovunque, quando vuoi. Il tuo piacere a domicilio con un semplice click!</p>
            </div>
        </div>
        <div class="restaurant-button text-center mt-4">
            <RouterLink :to="{name: 'home'}" class="btn my-button">Scopri i Ristoranti</RouterLink>
        </div>

        <div class="row mt-5 gap-5">
           <!-- work with us -->
            <div class="col-12">
                <div class="card text-bg-dark">
                    <img src="/public/img/cuoco.png" class="card-img bottom-img" alt="cuoco">
                    <div class="card-img-overlay d-flex flex-column">
                        <h5 class="card-title mt-auto">Diventa Nostro Partner</h5>
                        <p class="card-text">Affidati a noi per la gestione delle tue consegne, cosi potrai dedicarti a offrire i piatti migliori.</p>
                        <button class="btn white-button"><a href="http://127.0.0.1:8000/register">Inizia Subito!</a></button>
                    </div>
                </div>    
            </div>

            <!-- order now  -->

            <div class="col-12">
                <div class="card text-bg-dark">
                    <img src="/public/img/ordina-ora.png" class="card-img bottom-img" alt="cuoco">
                    <div class="card-img-overlay d-flex flex-column">
                        <h5 class="card-title mt-auto">Ordina Subito!</h5>
                        <p class="card-text">Scegli tra i migliori ristoranti vicino a te!</p>
                        <RouterLink :to="{name: 'home'}" class="btn white-button">Ordina Ora!</RouterLink>
                    </div>
                </div>    
            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>
    @use "../styles/partials/variables";
    .my-button{
        background-color: variables.$gold_text;
        border-radius: 0;
        padding: 1rem 2rem;
        font-weight: 600;
        font-size: 1.2rem;
    
        &:hover{
            color: variables.$gold-text;
            background-color: transparent;
            border-color: variables.$gold-text;
        }
    }

    .bottom-img{
        filter: blur(2px);
    }

    .white-button{
        background-color: variables.$gold_text;
        width: 40%;
        font-size: .8rem;
        padding: .2rem .5rem;
        a{
            text-decoration: none;
            color: variables.$bg_color;
        }
    &:hover{
        background-color: variables.$bg_color;;
        border-color: variables.$gold-text;
        color: variables.$gold-text;
    }

    &:hover a{
        color: variables.$gold-text;
        }   
    }

    .jumbo-main{

        .pasta-img{
            width: 100%;
    
        @media screen and (min-width: 768px){
            width: 200%;
        }

    @media screen and (min-width: 992px){
        margin-top: -25%;
            }
        }
    }
</style>
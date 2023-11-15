<script></script>
<template>

    <div class="container">
        <div class="text-light pt-5">
            <h2 class="display-2 fw-bold fst-italic text-center">Always, anywhere, whenever <span class="d-md-none">you want.</span><br><span class="d-md-inline" > you want</span> </h2>
        </div>
        <div class="jumbo-main row justify-content-md-center mt-5 mt-md-0 px-lg-5">
            <div class="col-12 col-md-8 d-md-flex align-items-sm-center gap-md-3">
                <div class="img-container order-md-last mb-5">
                    <img src="/public/img/hero-1.png" alt="" class="pasta-img">
                </div>
                <p class="text-center mt-3 text-white-50 lh-lg">Scopri il gusto a domicilio con la nostra consegna cibo! Da colazioni deliziose a cene abbondanti, goditi i sapori autentici sempre ovunque, quando vuoi. Un clic e ti portiamo la bontà a casa tua. Semplice, veloce e delizioso!</p>
            </div>
        </div>
        <div class="restaurant-button text-center m-4 mb-2 pb-5">
            <RouterLink :to="{name: 'home'}" class="btn my-button">Scopri i Ristoranti</RouterLink>
        </div>
    </div>
    

    <!-- video -->
    <div class="d-none d-md-block slow-video">
            <video src="/public/video/pata.mp4" autoplay loop muted></video>
    </div>


    <!-- quote -->

    <div class="container">
        <p class="text-center p-3 p-md-5 fst-italic">"Consegniamo non solo cibo, ma esperienze culinarie direttamente alla tua porta. Ogni piatto è un viaggio delizioso che inizia con un click. Scopri il gusto straordinario, perché la vera felicità è fatta di sapori autentici, comodamente consegnati a casa tua."</p>
    </div>

    <!-- Why us  -->

    <div class="why-us-section my-4">
        <div class="container text-center">
            <h2 class="mb-5 mt-5">Scegli il nostro servizio</h2>
            <div class="row g-5">

                <!-- card-fast-delivery -->
                <div class="col-12 col-md-6 col-xl-3">
                    <div class="card why-card">
                        <div class="why-us-icon">
                            <i class="fa-regular fa-clock"></i>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title mb-3">Consegna Veloce e Affidabile</h4>
                            <p class="card-text">Le nostre consegne sono rapide e affidabili, garantendo che il tuo cibo arrivi in tempi record.</p>
                        </div>
                    </div>
                </div>

                <!-- card-quality -->
                <div class="col-12 col-md-6 col-xl-3">
                    <div class="card why-card">
                        <div class="why-us-icon">
                            <i class="fa-solid fa-cookie-bite"></i>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title mb-3">Ampia Selezione di Cibi di Qualità</h4>
                            <p class="card-text">Oltre a garantire una consegna rapida, offriamo una vasta selezione di cibi deliziosi provenienti da ristoranti di alta qualità.</p>
                        </div>
                    </div>
                </div>

                <!-- card offer -->
                <div class="col-12 col-md-6 col-xl-3">
                    <div class="card why-card">
                        <div class="why-us-icon">
                            <i class="fa-solid fa-sack-dollar"></i>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title mb-3">Costi Competitivi o Offerte Speciali</h4>
                            <p class="card-text">Abbiamo offerte speciali per assicurarci che tu ottenga il massimo valore per il tuo denaro.</p>
                        </div>
                    </div>
                </div>

                <!-- card client-service -->
                <div class="col-12 col-md-6 col-xl-3">
                    <div class="card why-card">
                        <div class="why-us-icon">
                            <i class="fa-solid fa-headphones-simple"></i>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title mb-3">Servizio Clienti Eccellente</h4>
                            <p class="card-text">Il nostro team di supporto clienti è disponibile 24/7 per assisterti in ogni tua esigenza. La tua soddisfazione è la nostra priorità.</p>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
        
    </div>


    <!-- user interaction -->

    <div class="container mt-5 mb-5">
        <div class="row g-5 justify-content-md-center">
           <!-- work with us -->
            <div class="col-12 col-md-10 col-lg-5">
                <div class="card text-bg-dark h-100">
                    <img src="/public/img/cuoco.png" class="card-img bottom-img" alt="cuoco">
                    <div class="card-img-overlay d-flex flex-column p-0">
                        <div class="mt-auto container-text p-3">
                            <h5 class="card-title mt-auto">Diventa Nostro Partner</h5>
                            <p class="card-text">Affidati a noi per la gestione delle tue consegne, cosi potrai dedicarti a offrire i piatti migliori.</p>
                            <a class="btn white-button pb-1" href="http://127.0.0.1:8000/register">Inizia Subito!</a>
                        </div>
                    </div>
                </div>    
            </div>

            <!-- order now  -->

            <div class="col-12 col-md-10 col-lg-5">
                <div class="card text-bg-dark h-100 object-fit-cover">
                    <img src="/public/img/ordina-ora.png" class="card-img bottom-img" alt="cuoco">
                    <div class="card-img-overlay d-flex flex-column p-0">
                        <div class="mt-auto container-text p-3">
                            <h5 class="card-title">Ordina Subito!</h5>
                            <p class="card-text">Scegli tra i migliori ristoranti vicino a te!</p>
                            <RouterLink :to="{name: 'home'}" class="btn white-button">Ordina Ora!</RouterLink>
                        </div>
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
        filter: blur(0px);
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
            animation: rotate 15s linear infinite;
            animation: rotate 15s linear infinite;
            animation-duration: 15s;
            animation-timing-function: linear;
            animation-delay: 0s;
            animation-iteration-count: infinite;
            animation-direction: normal;
            animation-fill-mode: none;
            animation-play-state: running;
            animation-name: rotate;
            animation-timeline: auto;
            animation-range-start: normal;
            animation-range-end: normal;

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    
        @media screen and (min-width: 768px){
            width: 250%;
        }

        @media screen and (min-width: 992px){
            margin-top: -40%;
            width: 200%;
                }
            }

    }

    .container-text{
        background-color: rgba(0, 0, 0, 0.651);
        box-shadow: 0px -40px 26px 0px rgba(0, 0, 0, 0.651);
    }

    .slow-video{
        max-height: 300px;
        overflow: hidden;

        video{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .why-us-section{
        padding: 2rem;
        background-color: variables.$bg_color_secondary;
        background-position: top;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        
        .why-card{
            padding: 1.2rem;
            height: 100%;
            background-color: transparent;
            color: white;
            border-color: variables.$gold_text;
            
            .why-us-icon{
                margin-top: 1rem;
                margin-bottom: 1rem;
                i{
                    font-size: 3rem;
                    vertical-align: middle;
                    aspect-ratio: 1/1;
                    color: variables.$gold_text;
                    display: inline-block;
                    border: 1px solid variables.$gold_text;
                    border-radius: 50%;
                    padding: 1.5rem;
                }
            }
        }
    }

    
</style>
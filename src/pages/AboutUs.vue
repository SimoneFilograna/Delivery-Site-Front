<script></script>
<template>
    <div class="row justify-content-center">
        <h1 class="m-5 logo_text title text-center" id="about-us">ABOUT US</h1>
    </div>

    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <!-- 1 -->
            <div class="carousel-item active position-relative carousel-item-1">
                <div class="position-absolute d-block absolute-1 p-3">
                    <h3>La nostra Storia</h3>
                    <p class="mt-3">Quando i fondatori di DeliveBoo si sono trasferiti in Italia nel 2023, hanno trovato una città piena di ristoranti incredibili, ma sono rimasti stupiti che davvero pochi di questi consegnassero a domicilio. 
                        Così, hanno deciso che la loro missione personale sarebbe stata quella di portare i migliori ristoranti della città direttamente nelle case delle persone.
                    </p>
                </div>
            </div>
            <!-- 2 -->
            <div class="carousel-item position-relative carousel-item-2">
                <div class="position-absolute d-block absolute-1 p-3">
                    <h3>Ristoranti</h3>
                    <p class="mt-3">Collaboriamo con circa 10.0000 partner.
                        Il nostro servizio di consegna a domicilio è partito con i ristoranti, ma abbiamo intenzione di espanderci anche nei supermercati per offrire un servizio di spesa a domicilio. 
                        Più del 90% dei partner nella nostra piattaforma ha iniziato con il delivery proprio grazie a noi.
                    </p>
                </div>
            </div>
            <!-- 3 -->
            <div class="carousel-item position-relative carousel-item-3">
                <div class="position-absolute d-block absolute-1 p-3">
                    <h3>Rider</h3>
                    <p class="mt-3">La nostra proposta ai rider si basa su ciò che conta di più per loro. 
                        Come facciamo a sapere di cosa si tratta? Chiediamo e ascoltiamo sempre la loro opinione. 
                        In questo modo, abbiamo potuto sviluppare un’offerta che mette in primo piano ciò di cui hanno bisogno: orari flessibili, guadagni buoni e sicurezza. 
                        Deliveroo è stata fra le prime piattaforme al mondo a offrire l’assicurazione contro gli infortuni personali e un’assicurazione ulteriore per eventuali danni a cose o a terzi.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>



    <div class="container d-flex flex-column text-center mt-5">
        <div class="row justify-content-center">
            <h2 class="mt-4 logo_text title">IL NOSTRO TEAM</h2>
        </div>

        <div class="row g-4 p-5 justify-content-center">
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src="/valerio.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title"><a href="https://github.com/ColluraV?tab=repositories" class="card-link"><i class="fa-brands fa-github"></i> Valerio</a></h4>
                        <p class="card-text">"Non ho ancora capito quale sia stato il mio ruolo in questa impresa... però ha funzionato! "</p>
                    </div>
                </div>

            </div>
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src="/simone.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title"><a href="https://github.com/SimoneFilograna?tab=repositories" class="card-link"><i class="fa-brands fa-github"></i> Simone</a></h4>
                        <p class="card-text">"Mannaggia 'a carderella sto sfollando di brutto! Mo lo spacco sto sito! Non voglio più vedere il back-end!"</p>
                    </div>
                </div>

            </div>
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src="/dario.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title"><a href="https://github.com/DarioEsposito89?tab=repositories" class="card-link"><i class="fa-brands fa-github"></i> Dario</a></h4>
                        <p class="card-text">"Ormai sono esperto di validazioni, ne ho fatte talmente tante in sto sito che ho un master, ma non me ne chiedere più per favore"</p>
                    </div>
                </div>

            </div>
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src="/iryna.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title"><a href="https://github.com/IrynaVelykholova?tab=repositories" class="card-link"> <i class="fa-brands fa-github"></i> Iryna</a></h4>
                        <p class="card-text">"Io non c'ho capito niente POTA! Mi sa che mi tocca cominciare a vendere foto dei piedi"</p>
                    </div>
                </div>

            </div>
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src="/riccardo.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title"><a href="https://github.com/riccardo-giuri?tab=repositories" class="card-link"><i class="fa-brands fa-github"></i> Riccardo</a></h4>
                        <p class="card-text">"Spero che Braintree esploda, meglio la bara zio cane! Se c'è Braintree in un sito piuttosto non pago!"</p>
                    </div>
                </div>

            </div>





        </div>

    </div>
</template>
<style lang="scss" scoped>
@import '../styles/partials/variables';
#about-us {
    font-size:50px;
}
//carousel
.carousel {
    border-top: 1px solid $gold_text;
    border-bottom: 1px solid $gold_text;
}
.carousel-item-1 {
    background-image: url("/sogni milano nuovi ristoranti.webp");
    background-size: cover;
    height: 100vh;
}
.carousel-item-2 {
    background-image: url("/dieta-per-chi-mangia-a-casa.jpg");
    background-size: cover;
    height: 100vh;
}
.carousel-item-3 {
    background-image: url("/brett-jordan-1329359-unsplash1-1272x720.jpg.webp");
    background-size: cover;
    height: 100vh;
}
.absolute-1 {
    top: 5%;
    right: 5%;
    width: 400px;
    background-color: black;
    opacity: 0.8;
}
//card
.card{
    height: 100%;
    border: 2px solid $gold_text;
    background-color: rgba(0, 0, 0, 0.533);
    color: aliceblue;
    transition: width 2s, height 2s, transform 2s;
    box-shadow: inset 0px 10px 27px -8px #141414,
        inset 0px -10px 18px -8px $gold_text,
        5px 5px 15px 5px rgba(0, 0, 0, 0);
    h4{
        color: $gold_text;
    }
}
.card:hover{
    transform: scale(1.1);
    box-shadow: inset 0px 10px 27px -8px #141414,
        inset 0px -10px 18px -8px $gold_text,
        3px 2px 8px 1px rgb(216, 216, 216),
        5px 5px 15px 10px #c3c3c359,
        14px 11px 15px 0px rgba(193, 193, 193, 0.223);
}

.card img {
    max-height: 350px;
}

//title
.logo_text {
    color: $gold_text;
    font-weight: bold;

    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.516);
    position:relative;
    padding:10px;
    font-size:30px;
    border-top-right-radius:10px;
    border-bottom-left-radius:10px;
    transition:all 1s;
    &:after,&:before{
        content:" ";
        width:10px;
        height:10px;
        position:absolute;
        border :0px solid #fff;
        transition:all 1s;
        }
    &:after{
        top:-1px;
        left:-1px;
        border-top:5px solid $gold_text;
        border-left:5px solid $gold_text;
    }
    &:before{
        bottom:0px;
        right:0px;
        border-bottom:5px solid $gold_text;
        border-right:5px solid $gold_text;
    }
    &:hover{
        border-top-right-radius:0px;
        border-bottom-left-radius:0px;

        &:before,&:after{
        
        width:105%;
        height:112%;

        }
    }
}
.title {
    width: 300px;
}

h4 a {
    text-decoration: none;
    color: $gold_text;
}
</style>
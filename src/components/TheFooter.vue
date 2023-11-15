<script>
    export default{

    }
</script>

<template>
    <footer class="pt-4 pb-4">
        <div class="container">
            <h2 class="text-center">Deliveboo</h2>
            <div class="row text-center pt-2">
                <div class="col-12 pt-4 col-md-6 col-lg-3 pt-md-5">
                    <h6 class="mb-4">Social Media</h6>
                    <div class="social-container d-flex justify-content-center align-items-center gap-4">
                        <a href="#0"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#0"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#0"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#0"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="#0"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-12 pt-4 col-md-6 col-lg-3 pt-md-5">
                    <h6 class="mb-4">Contatti</h6>

                    <div class="contact">
                        <p>Tel: +39 012 345 6789</p>
                        <p>P.IVA: IT01234567890</p>
                        <p>Indirizzo: Via delle Prove, 32/b</p>
                        <p>Email: info@bestazienda.com</p>
                    </div>

                </div>
                <div class="col-12 pt-4 col-md-6 col-lg-3 pt-md-5">
                    <h6 class="mb-4">Consegne</h6>

                    <div class="delivery">
                        <p>Orari di consegna: Lun-Dom, 7/24h</p>
                        <p>Zone coperte: Boolandia, Tutti i Quartieri.</p>
                    </div>
                </div>
                <div class="col-12 pt-4 col-md-6 col-lg-3 pt-md-5">
                    <h6 class="mb-4">Link Utili</h6>

                    <div class="utility-link d-flex flex-column gap-2">
                        <a href="#0">Termini e condizioni</a>
                        <a href="#0">Politica sulla privacy</a>
                        <a href="http://127.0.0.1:8000/register">Registrati</a>
                        <a href="http://127.0.0.1:8000/login">Login</a>
                        <a href="http://127.0.0.1:8000/dashboard">Dashboard</a>



                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped >
    @use "../styles/partials/variables";

    footer{
        background-color: variables.$bg_color_secondary;
        margin-top: 2rem;

        .social-container,
        .utility-link{
            a{
                text-decoration: none;
                color: variables.$gold_text;
            &:hover{
                color: variables.$gold_text_hover;
            }
            }
        }

        .contact,
        .delivery,
        .utility-link{
            font-size: .8rem;
        }
    }
</style>
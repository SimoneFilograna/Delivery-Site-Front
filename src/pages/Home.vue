<script>
    import axios from 'axios';

    export default {

    }
</script>

<template>
    <div class="container-fluid">
        <div class="row">
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

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-3">
                            <div class="card h-100">
                                <img src="https://media-assets.lacucinaitaliana.it/photos/61fac2ad07be724774c9c5a9/16:9/w_2560%2Cc_limit/Cena-a-Como-portrait.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Ristorante del pendolo</h5>
                                    <p class="card-text">Italiano</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="card h-100">
                                <img src="https://media-assets.lacucinaitaliana.it/photos/61fac2ad07be724774c9c5a9/16:9/w_2560%2Cc_limit/Cena-a-Como-portrait.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Ristorante del pendolo</h5>
                                    <p class="card-text">Italiano</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="card h-100">
                                <img src="https://media-assets.lacucinaitaliana.it/photos/61fac2ad07be724774c9c5a9/16:9/w_2560%2Cc_limit/Cena-a-Como-portrait.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Ristorante del pendolo</h5>
                                    <p class="card-text">Italiano</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="card h-100">
                                <img src="https://media-assets.lacucinaitaliana.it/photos/61fac2ad07be724774c9c5a9/16:9/w_2560%2Cc_limit/Cena-a-Como-portrait.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Ristorante del pendolo</h5>
                                    <p class="card-text">Italiano</p>
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
  .row {
    padding: 0px 64px;
  }

  .row div {
    padding: 0;
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

  .form-check {
    margin-left: 23px;
  }

  .row {
    margin: 0;
  }

  .container-fluid {
    padding: 0;
  }
</style>
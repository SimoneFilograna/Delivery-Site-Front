<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                cartItems: [],
                totalPrice: {},

                clientToken: "",
                dropinInstance: null,
                showUI: true,

                // ... Altre variabili esistenti
                customer_name: "",
                customer_lastname: "",
                customer_address: "",
                customer_email: "",
                customer_phone: "",

                formErrors: {
                    customer_name: "",
                    customer_lastname: "",
                    customer_address: "",
                    customer_email: "",
                    customer_phone: ""
                }
            }
        },

        methods: {
            fetchClientToken() {
                //axios get call to URL
                axios.get("http://127.0.0.1:8000/api/checkout/token", {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }).then((response) => {
                    // save datas in the restaurant array
                        this.clientToken = response.data.token;

                        if(this.clientToken !== "") {
                            this.AddDropInUI();
                        }
                        
                    }).catch((error) => {
                        console.log(error);
                    })
            },

            validateForm() {
            let isValid = true;

            if (!this.customer_name) {
                this.formErrors.customer_name = "Il campo Nome è obbligatorio.";
                isValid = false;
            } else {
                this.formErrors.customer_name = "";
            }

            if (!this.customer_lastname) {
                this.formErrors.customer_lastname = "Il campo Cognome è obbligatorio.";
                isValid = false;
            } else {
                this.formErrors.customer_lastname = "";
            }

            if (!this.customer_address) {
                this.formErrors.customer_address = "Il campo Indirizzo è obbligatorio.";
                isValid = false;
            } else {
                this.formErrors.customer_address = "";
            }

            if (!this.customer_email) {
            this.formErrors.customer_email = "Il campo Email è obbligatorio.";
            isValid = false;
            } else {
            // Check if email format is valid
            const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!regex.test(this.customer_email)) {
            this.formErrors.customer_email = "Email non valida.";
            isValid = false;
            } else {
            this.formErrors.customer_email = "";
            }
        }

            if (!this.customer_phone) {
                this.formErrors.customer_phone = "Il campo Recapito telefonico è obbligatorio.";
                isValid = false;
            } else {
                this.formErrors.customer_phone = "";
            }

            return isValid;
        },

            AddDropInUI() {
                braintree.dropin.create({
                authorization: this.clientToken, 
                container: '#dropin-container'
                }, (error, instance) => {
                    if (error) {
                        console.error(error);
                    } else {
                        this.dropinInstance = instance;
                    }
                });
            },

            submitPayment() {
            if (this.validateForm() && this.dropinInstance) {
                    const self = this;

                    this.dropinInstance.requestPaymentMethod(function (err, payload) {
                    axios.post('http://127.0.0.1:8000/api/checkout', {
                        nonce: payload.nonce
                    })
                    .then(response => {
                        self.showUI = !self.showUI;
                        self.$router.push({name: 'success'});
                    })
                    .catch(error => {
                        //console.log('Error');
                        // Puoi gestire l'errore qui
                    });
                    });
                }
            },

            // total price
            totalSum() {
                let total = 0;
                this.cartItems.forEach(plate => {
                    total += plate.quantity * plate.price;
                });
                this.totalPrice=total.toFixed(2);
                return total.toFixed(2);
            },
        },

        mounted() {
            this.fetchClientToken();
            this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
            this.totalSum();
        }
    }
</script>

<template>
    <!-- Delivery customer info -->
    <div class="container">
        <h1 class="my-5">Dati per la Spedizione</h1>
        <!-- Name  -->
        <div class="form-group pe-1 col-6 mt-3">
            <label>Nome*</label>
            <input class="form-control" type="text" name="customer_name" id="customer_name" v-model="customer_name"/>
            <div class="alert alert-danger my-2" v-if="formErrors.customer_name">
                {{ formErrors.customer_name }}
            </div>
        </div>

        <!-- Last name  -->
        <div class="form-group col-6 ps-1 my-4">
            <label>Cognome*</label>
            <div>
                <input class="form-control" type="text" name="customer_lastname" id="customer_lastname" v-model="customer_lastname"/>
                <div class="alert alert-danger my-2" v-if="formErrors.customer_lastname">
                {{ formErrors.customer_lastname }}
                </div>
            </div>
        </div>

        <!-- Delivery Address  -->
        <div class="form-group col-6 ps-1 my-4">
            <label>Indirizzo spedizione*</label>
            <div>
                <input class="form-control" type="text" name="customer_address" id="customer_address" v-model="customer_address"/>
                <div class="alert alert-danger my-2" v-if="formErrors.customer_address">
                {{ formErrors.customer_address }}
                </div>
            </div>
        </div>

        <!-- Email  -->
        <div class="form-group col-6 ps-1 my-4">
            <label>Email*</label>
            <div>
                <input class="form-control" type="text" name="customer_email" id="customer_email" v-model="customer_email"/>
                <div class="alert alert-danger my-2" v-if="formErrors.customer_email">
                {{ formErrors.customer_email }}
                </div>
            </div>
        </div>

        <!-- Phone number -->
        <div class="form-group col-6 ps-1 my-4">
            <label>Recapito telefonico*</label>
            <div>
                <input class="form-control" type="text" name="customer_phone" id="customer_phone" v-model="customer_phone"/>
                <div class="alert alert-danger my-2" v-if="formErrors.customer_phone">
                {{ formErrors.customer_phone }}
                </div>
            </div>
        </div>
    </div>

    <!-- Braintree Form -->
    <div class="container mt-3" v-show="showUI">
        <h1>Inserisci coordinate di pagamento</h1>
        <div id="dropin-container"></div>
        <button @click="submitPayment()" class="btn btn-primary">Conferma pagamento</button>
    </div>

    
    
</template>

<style lang="scss" scoped>
    
</style>
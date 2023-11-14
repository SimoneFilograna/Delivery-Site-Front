<script>
import axios from 'axios';

export default {
    data() {
        return {
            cartItems: [],

            restaurant_name: "",

            clientToken: "",
            dropinInstance: null,
            showUI: true,

            // // ... Altre variabili esistenti
            // customer_name: "",
            // customer_lastname: "",
            // customer_address: "",
            // customer_email: "",
            // customer_phone: "",

            formErrors: {
                customer_name: "",
                customer_lastname: "",
                customer_address: "",
                customer_email: "",
                customer_phone: ""
            },

            dataToSend: {
                customer_name: "",
                customer_lastname: "",
                customer_email: "",
                customer_address: "",
                customer_phone: "",
                amount_paid: "",
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

                if (this.clientToken !== "") {
                    this.AddDropInUI();
                }

            }).catch((error) => {
                console.log(error);
            })
        },

        validateForm() {
            let isValid = true;

            if (!this.dataToSend.customer_name) {
                this.formErrors.customer_name = "Il campo Nome è obbligatorio.";
                isValid = false;
            } else {
                this.formErrors.customer_name = "";
            }

            if (!this.dataToSend.customer_lastname) {
                this.formErrors.customer_lastname = "Il campo Cognome è obbligatorio.";
                isValid = false;
            } else {
                this.formErrors.customer_lastname = "";
            }

            if (!this.dataToSend.customer_address) {
                this.formErrors.customer_address = "Il campo Indirizzo è obbligatorio.";
                isValid = false;
            } else {
                this.formErrors.customer_address = "";
            }

            if (!this.dataToSend.customer_email) {
                this.formErrors.customer_email = "Il campo Email è obbligatorio.";
                isValid = false;
            } else {
                // Check if email format is valid
                const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!regex.test(this.dataToSend.customer_email)) {
                    this.formErrors.customer_email = "Email non valida.";
                    isValid = false;
                } else {
                    this.formErrors.customer_email = "";
                }
            }

            if (!this.dataToSend.customer_phone) {
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
                            console.log(response)
                            self.showUI = !self.showUI;
                            self.$router.push({ name: 'success' });
                        })
                        .catch(error => {
                            console.log('Error');
                            self.$router.push({ name: 'rejected' });
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
            this.totalPrice = total.toFixed(2);
            return total.toFixed(2);
        },

        // total price for plate
        totalPlatePrice(a, b) {
            return (a * b).toFixed(2)
        },

        onFormSubmit() {

            // create const with data to send
            // const data = {
            //     userData: this.dataToSend,
            //     cart: this.cartItems
            // }

            // axios call in post for send data 

            axios.post('http://127.0.0.1:8000/api/order', {
                customer_name: this.dataToSend.customer_name,
                customer_lastname: this.dataToSend.customer_lastname,
                customer_email: this.dataToSend.customer_email,
                customer_address: this.dataToSend.customer_address,
                customer_phone: this.dataToSend.customer_phone,
                amount_paid: this.dataToSend.amount_paid,
                cart: this.cartItems             
                })
                .then(resp => {
                    console.log(resp.data)  
                }).catch(err => console.log(err))
        }
    },

    mounted() {
        this.fetchClientToken();
        this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
        this.dataToSend.amount_paid = JSON.parse(localStorage.getItem('totalPrice'));
        this.restaurant_name = JSON.parse(localStorage.getItem('restaurant_name'));

    }
}
</script>

<template>
    <!-- Delivery customer info -->
    <div class="container pb-5">

        <div class="row g-5">

            <!-- left form container -->
            <div class="col-12 col-md-6">

                <h4 class="my-5">Dati per la Spedizione</h4>

                <form @submit.prevent="onFormSubmit">
                    <!-- Name  -->
                    <div class="form-group pe-1 col mt-3">
                        <label>Nome*</label>
                        <input class="form-control" type="text" name="customer_name" id="customer_name"
                            v-model="dataToSend.customer_name" />
                        <div class="alert alert-danger my-2" v-if="formErrors.customer_name">
                            {{ formErrors.customer_name }}
                        </div>
                    </div>

                    <!-- Last name  -->
                    <div class="form-group col ps-1 my-4">
                        <label>Cognome*</label>
                        <div>
                            <input class="form-control" type="text" name="customer_lastname" id="customer_lastname"
                                v-model="dataToSend.customer_lastname" />
                            <div class="alert alert-danger my-2" v-if="formErrors.customer_lastname">
                                {{ formErrors.customer_lastname }}
                            </div>
                        </div>
                    </div>

                    <!-- Delivery Address  -->
                    <div class="form-group col ps-1 my-4">
                        <label>Indirizzo spedizione*</label>
                        <div>
                            <input class="form-control" type="text" name="customer_address" id="customer_address"
                                v-model="dataToSend.customer_address" />
                            <div class="alert alert-danger my-2" v-if="formErrors.customer_address">
                                {{ formErrors.customer_address }}
                            </div>
                        </div>
                    </div>

                    <!-- Email  -->
                    <div class="form-group col ps-1 my-4">
                        <label>Email*</label>
                        <div>
                            <input class="form-control" type="text" name="customer_email" id="customer_email"
                                v-model="dataToSend.customer_email" />
                            <div class="alert alert-danger my-2" v-if="formErrors.customer_email">
                                {{ formErrors.customer_email }}
                            </div>
                        </div>
                    </div>

                    <!-- Phone number -->
                    <div class="form-group col ps-1 my-4">
                        <label>Recapito telefonico*</label>
                        <div>
                            <input class="form-control" type="text" name="customer_phone" id="customer_phone"
                                v-model="dataToSend.customer_phone" />
                            <div class="alert alert-danger my-2" v-if="formErrors.customer_phone">
                                {{ formErrors.customer_phone }}
                            </div>
                        </div>
                    </div>

                    <!-- Braintree Form -->
                    <div class="mt-3" v-show="showUI">
                        <h1>Inserisci coordinate di pagamento</h1>
                        <div id="dropin-container"></div>
                        <button type="submit" @click="submitPayment()" class="btn btn-primary">Conferma pagamento</button>
                    </div>

                </form>

            </div>

            <!-- recap container + payment -->

            <div class="col-12 col-md-6">

                <div class="recap-container my-5">
                    <h5>Riepilogo ordine:</h5>
                    <h3>{{ restaurant_name }}</h3>
                    <div class="border p-3 mt-4">
                        <div class="single-plate d-flex gap-4" v-for="plate in cartItems">
                            <p class="w-50">{{ plate.plate_name }}</p>
                            <p class="w-25">x{{ plate.quantity }}</p>
                            <p class="w-25">{{ totalPlatePrice(plate.quantity, plate.price) }} €</p>
                        </div>
                        <div class="d-flex">
                            <p class="fw-bold w-75">Total Price:</p>
                            <p class="w-25">{{ dataToSend.amount_paid }} €</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>



    </div>
</template>

<style lang="scss" scoped></style>
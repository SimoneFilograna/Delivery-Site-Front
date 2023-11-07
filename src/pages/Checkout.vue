<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                clientToken: "",
                dropinInstance: null,
                showUI: true
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
                if (this.dropinInstance) {
                    const self = this;

                    this.dropinInstance.requestPaymentMethod(function (err, payload) {
                    axios.post('http://127.0.0.1:8000/api/checkout', {
                        nonce: payload.nonce
                    })
                    .then(response => {
                        self.showUI = !self.showUI;
                        self.$router.push({name: 'home'});
                    })
                    .catch(error => {
                        //console.log('Error');
                        // Puoi gestire l'errore qui
                    });
                    });
                }
            },
        },

        mounted() {
            this.fetchClientToken();
        }
    }
</script>

<template>
    <div>
        <div class="container" v-show="showUI">
                <div id="dropin-container"></div>
                <button @click="submitPayment()" class="btn btn-primary">Submit Payment</button>
        </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
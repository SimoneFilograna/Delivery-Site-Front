<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                clientToken: ""
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
                }, (error, dropinInstance) => {
                    // Handle drop-in instance and errors here
                });
            }
        },

        mounted() {
            this.fetchClientToken();
        }
    }
</script>

<template>
    <div id="dropin-container" style="display: flex;justify-content: center;align-items: center;"></div>
    <div style="display: flex;justify-content: center;align-items: center; color: white">
        <a id="submit-button" class="btn btn-sm btn-success">Submit payment</a>
    </div>
</template>

<style lang="scss" scoped>
    .braintree-form__notice-of-collection{
        display: none;
    }
</style>
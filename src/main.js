import { createApp } from 'vue'
import "./styles/general.scss"
import "bootstrap/dist/js/bootstrap.js";
import {router} from "./router"
import App from './App.vue'

createApp(App).use(router).mount('#app')

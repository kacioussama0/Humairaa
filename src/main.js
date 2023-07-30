import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.vue'
import './assets/css/master.css';
import {router} from "./router.js";

const app = createApp(App);

app.use(router);
app.mount('#app')

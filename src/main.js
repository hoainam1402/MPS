import { createApp } from 'vue'
import App from './App.vue';
import router from './router/router';
import store from './store/store';


// Import CSS
import "./style/main.css";
import "./style/variable.css";
import "./style/base.css";
import './style/index.css';
// import "@/style/customize.css";


const myApp = createApp(App);


myApp.use(router);
myApp.use(store);
myApp.mount("#app");

